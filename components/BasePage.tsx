import * as React from "react";
import { getMobileOperatingSystem, MOBILE_PLATFORM } from "../helper/utils";
import Seo, { ISeoProps } from "./seo";

export interface IBasePageProps {
  seoProps?: {
    title: string;
    description?: string;
    image?: string;
  };
}

export default abstract class BasePage<
  T extends IBasePageProps = IBasePageProps
> extends React.PureComponent<T> {
  constructor(props: T) {
    super(props);
  }

  componentDidMount() {
    const platform = getMobileOperatingSystem();
    if (platform === MOBILE_PLATFORM.ANDROID) {
      window.location.href =
        "http://play.google.com/store/apps/details?id=com.truecaller&hl=en";
    } else if (platform === MOBILE_PLATFORM.IOS) {
      window.location.href =
        "itms://itunes.apple.com/app/apple-store/id375380948?mt=8";
    }
  }

  protected abstract renderPage(): React.ReactNode | undefined;

  protected renderSeoContent = (seoProps: ISeoProps) => {
    return (
      <Seo
        title={seoProps.title}
        description={seoProps.description}
        seoImage={{
          url: "https://economictimes.indiatimes.com/thumb/msid-78460334,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg?from=mdr",
          alt: "Bitcoin",
        }}
      />
    );
  };

  render() {
    const { seoProps } = this.props;
    return (
      <div>
        {seoProps ? this.renderSeoContent(seoProps) : null}
        {this.renderPage()}
      </div>
    );
  }
}
