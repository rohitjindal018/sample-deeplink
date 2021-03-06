import * as React from "react";
import BasePage, { IBasePageProps } from "../components/BasePage";

interface ICoinDetailsProps extends IBasePageProps {
  details: {
    symbol: string;
    description: string;
    founded_by: string;
    founded_in: number;
  };
}

class CoinDetails extends BasePage<ICoinDetailsProps> {
  renderPage() {
    const { details } = this.props;
    return <div></div>;
  }
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://62050462161670001741b30d.mockapi.io/api/v1/data"
  );
  const data = await response.json();
  return {
    props: {
      details: data,
      seoProps: {
        ...data,
        title: data.symbol,
      },
    },
  };
}

export default CoinDetails;
