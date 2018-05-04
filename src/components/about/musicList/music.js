/**
 * Created by cy183 on 2018/4/12.
 */
import store from '../../../vuex/index'
import axios from 'axios'

const musicApi = {
    parseLrc (lrc) {
        if (!lrc) return ''
        const lyrics = lrc.split('\n')
        let lrcObj = {}
        for (let i = 0; i < lyrics.length; i++) {
            // 解码
            const lyric = decodeURIComponent(lyrics[i])
            const timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
            const timeRegExpArr = lyric.match(timeReg)
            if (!timeRegExpArr) continue
            const clause = lyric.replace(timeReg, '')
            for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
                const t = timeRegExpArr[k]
                let min = Number(String(t.match(/\[\d*/i)).slice(1))
                let sec = Number(String(t.match(/\:\d*/i)).slice(1))
                const time = min * 60 + sec
                lrcObj[time] = clause
            }
        }
        return lrcObj
    },
    setPlayType(type){
        this.typeType = Number.parseInt(type)
        // 设置本地存储和 store
        store.dispatch({
            type: 'set_AudioPlayType',
            data: this.typeType
        })
        localStorage.setItem('audioPlayType', this.typeType)
    },
    //获取歌单列表
    getMusicSheet(id) {
        const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=playlist&id=${id}`
        axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            store.dispatch({
                type: 'set_MusicList',
                data: res.data.playlist.tracks
            })
        }, (err) => {
            console.log(err)
        })
    },
    //点击播放音乐
    clickIndex(data,that) {
        const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=musicInfo&id=${data.id}`
        axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            if(res.data.data[0].url === null){
                console.log("音乐无法播放,请播放其他音频")
                const currentMusic = {
                    index: store.getters.getCurrentAudio.index || store.getters.getCurrentAudio.musicIndex
                }
                store.commit({
                    type: 'setCurrentAudio',
                    data: currentMusic
                })
                this.nextOrPrePlay(that,true)
                return
            }
        const newData = {
            id: data.id,
            name: data.name,
            url: musicApi.replaceUrl(res.data.data[0].url),
            singer: data.singer,
            duration: data.duration,
            picurl: data.pic,
            musicIndex: data.index,
            list: data.list,
            type: data.type
        }

        this.getMusicIrc(newData, that)
        // 设置播放状态
        const ele = store.getters.getAudioEle
        store.commit({
            type: 'setCurrentAudio',
            data: newData
        })
        // 设置duration
        //store.commit({
        //    type: 'setCurrentD',
        //    data: ele.currentTime
        //})
        // 设置当前音乐播放时间
        store.commit({
            type: 'setCurrentTime',
            data: data.duration
        })

        that.$nextTick(() => {
            try {
                store.getters.getAudioEle.load()
                store.getters.getAudioEle.play()
            } catch (e) {
                return
            }
            // 设置播放状态
            store.commit('setAudioIsPlay', !ele.paused)
        })
        }, (err) => {
            console.log(err)
        })
    },
    //获取歌词
    getMusicIrc(data, that) {
        const ele = store.getters.getAudioEle
        const apiLyric = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=lyric&id=${data.id}`
        console.log(apiLyric)
        axios.get(apiLyric, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            console.log(res)
            let parseLrc = {}
            if (res.data.lrc === undefined) {
                parseLrc = {'0': '纯音乐,请欣赏'}
            } else {
                parseLrc = this.parseLrc(res.data.lrc.lyric)
                this.lyric = this.parseLrc(res.data.lrc.lyric)
            }
            const currentMusic = {
                id: data.id,
                name: data.name,
                url: musicApi.replaceUrl(data.url),
                singer: data.singer,
                duration: data.duration,
                picurl: data.picurl,
                index: data.musicIndex,
                lyric: parseLrc,
                lrcContent: store.getters.getAudioLrcContent
            }
            store.commit({
                type: 'setCurrentAudio',
                data: currentMusic
            })
            that.$nextTick(() => {
                // 设置歌词位置
                store.commit({
                    type: 'setAudioLrcIndex',
                    data: 0
                })
            })
        })
    },
    //播放暂停
    playPause () {
        const ele = store.getters.getAudioEle
        try {
            if(ele.paused){
                ele.play()
                console.log(this)
            } else {
                ele.pause()
                console.log(this)
            }
            store.commit('setAudioIsPlay', !ele.paused)
        }catch (e){
            return
        }
    },
    // 获取音乐时长
    getMusicDurationType (time) {
        const minT = Math.floor(time / 1000 / 60) >= 10 ? Math.floor(time / 1000 / 60) : '0' + Math.floor(time / 1000 / 60)
        const minS = Math.floor(time / 1000 % 60) >= 10 ? Math.floor(time / 1000 % 60) : '0' + Math.floor(time / 1000 % 60)
        return minT + ':' + minS
    },
    // 由于网易云地址有添加防盗链  m8c,m7c 的地址替换成m8,m7 就可以正常播放
    replaceUrl (url) {
        return url.indexOf('//m7c') < 0 ? (url.indexOf('//m8c') ? url.replace('//m8c', '//m8') : url) : url.replace('//m7c', '//m7')
    },
    clickProgress(event){
        const ele = store.getters.getAudioEle
        const durationT = ele.duration
        const e = event || window.event
        const l = e.offsetX
        const w = document.getElementById('music_progressD').offsetWidth
        ele.currentTime = Math.floor(l / w * durationT)
    },
    // 初始化音乐事件
    initAudioEvent (that) {
        // const _this = this
        // audio Dom元素
        const ele = store.getters.getAudioEle
        // const _this = this

        ele.onloadedmetadata = () => {
        }

        // 音乐播放结束事件
        ele.onended = () => {
            this.nextOrPrePlay(that,true)
        }
        ele.ontimeupdate = function () {
            if (!that.isDrag) {
                const ele = store.getters.getAudioEle
                const duration = Math.floor(ele.duration)
                const currentT = Math.floor(ele.currentTime)
                // 设置currentT
                store.dispatch('set_currentTime', currentT)
                // 设置duration
                store.dispatch('set_currentD', currentT / duration * 100)
            }
        }
        // 监听缓冲的进度
        ele.onprogress = function () {
            const durationT = Math.floor(ele.duration)
            try {
                if (ele.buffered.length > 0) {
                    var bufferedT = 0
                    for (var i = 0; i < ele.buffered.length; i++) {
                        bufferedT += ele.buffered.end(i) - ele.buffered.start(i)
                        if (bufferedT > durationT) {
                            bufferedT = durationT
                            console.log('缓冲完成')
                        }
                    }
                    var bufferedP = Math.floor((bufferedT / durationT) * 100)
                    that.bufferingP = bufferedP
                }
            } catch (e) {
                return
            }
        }
    },
    //上一曲下一曲
    nextOrPrePlay (that,isNext) {
        console.log(store.getters.getCurrentAudio)
        let currentIndex = store.getters.getCurrentAudio.musicIndex || 0
        const length = store.getters.getMusicList.length
        const playMusicList = store.getters.getMusicList
        // 判断是否是随机模式
        if (this.typeType !== 3) {
            if( isNext ){
                currentIndex++
                if(currentIndex >= length - 1) {
                    currentIndex = length - 1
                }
            }else {
                currentIndex--
                if(currentIndex <= 0){
                    currentIndex = 0
                }
            }
        } else {
            currentIndex = Math.floor(Math.random() * length)
        }

        console.log(currentIndex)
        console.log(playMusicList[currentIndex])
        const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=musicInfo&id=${playMusicList[currentIndex].id}`
        axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            if(res.data.data[0].url === null){
                let initIndex = 0
                const currentMusic = {
                    index: store.getters.getCurrentAudio[currentIndex] ? (isNext ? store.getters.getCurrentAudio[currentIndex] + 1:store.getters.getCurrentAudio[currentIndex] - 1) : (isNext ? initIndex + 1 : initIndex)
                }
                store.commit({
                    type: 'setCurrentAudio',
                    data: currentMusic
                })
                this.nextOrPrePlay(that,true)
                return
            }
            const newData = {
                id: playMusicList[currentIndex].id,
                name: playMusicList[currentIndex].name,
                url: musicApi.replaceUrl(res.data.data[0].url),
                singer: playMusicList[currentIndex].singer,
                duration: playMusicList[currentIndex].dt,
                picurl: playMusicList[currentIndex].pic,
                musicIndex: currentIndex,
                list:  store.getters.getMusicList,
                type: 'unupdate'
            }
            this.getMusicIrc(newData, that)

            store.dispatch({
                type: 'set_CurrentAudio',
                data: newData
            })
            const ele = store.getters.getAudioEle
            store.commit({
                type: 'setCurrentTime',
                data: playMusicList[currentIndex].dt
            })

            that.$nextTick(() => {
                try {
                     store.getters.getAudioEle.load()
                     store.getters.getAudioEle.play()
                } catch (e) {
                     return
                }
            // 设置播放状态
            store.commit('setAudioIsPlay', !ele.paused)
        })
        }, (err) => {
            console.log(err)
        })
    }
}

export default musicApi
