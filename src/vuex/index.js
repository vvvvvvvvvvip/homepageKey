/**
 * Created by cy183 on 2018/1/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
//import Audio from './modules/audio.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    // ����״̬
    state: {
        author: 'VVVVVVVVVVIP',
        bingInfo: [],
        workInfo: [],
        musicList: {},
        currentAudio: {
            url: '',
            duration: '',
            picurl: '',
            index: 1
        },
        // ���ֵ�Ԫ��
        audioEle: '',
        //��Ƶ�Ƿ����ڲ���
        audioIsPlay: false,
        //��ǰ��ʱ��
        currentD: 0,
        //��ǰ������ʱ��
        currentTime: '00:00'
    },
    getters: {
        getBingInfo: state => state.bingInfo,
        getWorkInfo: state => state.workInfo,
        getMusicList: state => state.musicList,
        getCurrentAudio: state => state.currentAudio,
        getAudioEle: state  => state.audioEle,
        getAudioIsPlay: state => state.audioIsPlay,
        getCurrentD: state => state.currentD,
        getCurrentTime: state=> state.currentTime
    },
    mutations: {
        setCurrentD (state, obj) {
          state.currentD = obj
        },
        setCurrentTime (state, obj) {
            state.currentTime = obj
        },
        setAudioEle (state, obj) {
            state.audioEle = obj.data
        },
        newAuthor (state,msg){
            state.author = msg
        },
        setBingInfo (state, obj) {
            state.bingInfo = obj
        },
        setWorkInfo (state, obj) {
            state.workInfo = obj
        },
        setMusicList (state, obj) {
            state.musicList = obj.data
        },
        setCurrentAudio (state, obj) {
            state.currentAudio = obj.data
        },
        setAudioIsPlay (state, obj) {
            state.audioIsPlay = obj
        }
    },
    modules: {
        audio: Audio
    },
    actions: {
        set_currentTime ({commit}, obj) {
          commit('setCurrentTime', obj)
        },
        set_currentD ({commit}, obj) {
          commit('setCurrentD', obj)
        },
        set_AudioEle ({commit}, obj) {
            commit('setAudioEle', obj)
        },
        set_BingInfo ({ commit }, obj) {
            commit('setBingInfo', obj)
        },
        set_WorkInfo ({ commit },obj) {
            commit("setWorkInfo",obj)
        },
        set_MusicList ({commit}, obj) {
            commit('setMusicList', obj)
        },
        set_CurrentAudio ({commit}, obj) {
            commit('setCurrentAudio', obj)
        },
        set_AudioIsPlay ({commit}, obj) {
            commit('setAudioIsPlay', obj)
        }
    }
})

export default store
