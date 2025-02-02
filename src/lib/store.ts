import { create } from 'zustand';

type AppStore = {
	appTitle: string;
	setAppTitle: (title: string) => void;
};

export const useAppStore = create<AppStore>((set) => ({
	appTitle: '',
	setAppTitle: (title) => set({ appTitle: title }),
}));
