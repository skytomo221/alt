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
      <table>
        <tbody>
          <tr>
            <th scope="row" className="text-right align-top">
              好きな食べ物：
            </th>
            <td className="text-left w-1/2">{favoriteFood}</td>
          </tr>
          <tr>
            <th scope="row" className="text-right align-top">
              趣味：
            </th>
            <td className="text-left w-1/2">{hobby}</td>
          </tr>
          <tr>
            <th scope="row" className="text-right align-top">
              ひとこと：
            </th>
            <td className="text-left w-1/2">{comment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
