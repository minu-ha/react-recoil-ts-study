import { atom } from "recoil";

export interface ITodoTypes {
  id: number;
  contents: string;
  isCompleted: boolean;
}

//입력값 관리
export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

//업데이트 배열
export const todoState = atom<ITodoTypes[]>({
  key: "todo",
  default: [
    {
      id: 10,
      contents:
        "letter excellent taught coast chair syllable present has about bush corner horse farther no lack section rhyme ants manufacturing rear wheel principle directly jungle",
      isCompleted: false,
    },
    {
      id: 74,
      contents:
        "stood immediately from rest row dry weak feathers ear trouble blue sure public ago teach income represent fruit wave knew lovely myself time place",
      isCompleted: false,
    },
    {
      id: 20,
      contents:
        "river crack house writing consider height quietly keep feathers principal balloon case place floor flies coat specific log bottom near factory state cook court",
      isCompleted: false,
    },
  ],
});
