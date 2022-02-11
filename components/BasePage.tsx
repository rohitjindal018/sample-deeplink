import * as React from 'react';
import Seo, { ISeoProps } from './seo';

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

    protected abstract renderPage(): React.ReactNode | undefined;

    protected renderSeoContent = (seoProps: ISeoProps) => {
        return (
            <Seo
                title={seoProps.title}
                description={seoProps.description}
                seoImage={{
                    url: 'https://economictimes.indiatimes.com/thumb/msid-78460334,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg?from=mdr',
                    alt: 'Bitcoin',
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
