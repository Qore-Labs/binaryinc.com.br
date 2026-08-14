import { create, StateCreator } from "zustand";
import { IMenuState } from "../../types/config";

export interface useMenuMobile extends IMenuState {
  setOpen: () => void;
  setClose: () => void;
}

const initialMenuState: IMenuState = {
  isOpen: false,
};

const createMenuStore: StateCreator<useMenuMobile> = (set) => ({
  ...initialMenuState,

  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
});

export const useMenuMobile = create<useMenuMobile>(createMenuStore);
