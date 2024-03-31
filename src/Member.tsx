import React from "react";

type Props = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  face: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hoverFace: any;
  profile: string;
  favoriteFood: string;
  hobby: string;
  comment: string;
};

export function Member({
  name,
  face,
  hoverFace,
  profile,
  favoriteFood,
  hobby,
  comment,
}: Props): JSX.Element {
  return (
    <div className="w-1/5">
      <div>{name}</div>
      <img
        className="w-full aspect-square object-cover"
        src={face}
        onMouseOver={(e) => (e.currentTarget.src = hoverFace)}
        onMouseOut={(e) => (e.currentTarget.src = face)}
      />
      <div>{profile}</div>
      <div>好きな食べ物：{favoriteFood}</div>
      <div>趣味：{hobby}</div>
      <div>ひとこと：{comment}</div>
    </div>
  );
}
