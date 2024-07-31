import { create } from 'zustand';

const useStore = create((set) => ({
    currentVideo: null,
    setCurrentVideo: (videoKey) => set({
        currentVideo: `http://videostreaming-env-1.eba-mmabnrqa.eu-north-1.elasticbeanstalk.com/api/videos/stream/${videoKey}`
    }),
    currentTitle: '',
    setCurrentTitle: (title) => set({
        currentTitle: title
    }),
    currentDesc: '',
    setCurrentDesc: (desc) => set({
        currentDesc: desc
    })
}));

export default useStore;