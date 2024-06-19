import "./Forecast.css";

export const Forecast = () => {
  /**
   * 1. Requrement:
   *  Implement functionality where on click on Home you will show the text Home in the h2, same stands for Hourly
   */

  return (
    <section className="forecastContainer">
      <div className="navigation">
        <h2>Hourly</h2>
        <div className="tabItems">
          <p>Home</p>
          <p>Hourly</p>
        </div>
      </div>
    </section>
  );
};
