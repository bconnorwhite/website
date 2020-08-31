import React from "react";
import { Redirect } from "@essence/app";

type Props = {
  match?: {
    params?: {
      repo?: string;
    }
  }
}

const RepoRedirect: React.FC<Props> = (props: Props) => {
  if(props?.match?.params?.repo) {
    return (
      <Redirect to={`https://github.com/bconnorwhite/${props.match.params.repo}`} />
    );
  } else {
    return null;
  }
};

export default RepoRedirect;
