import React from 'react';
import gcpIcon from './googlecloudplatform-logo-1-1024x265.png';
import jooxIcon from './Joox_icon.png';
import sellsukiIcon from './sellsuki.png';
const Prizes = () =>
(
  <div>
    <section className="hero is-primary prize-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Prizes /&gt;
          </h1>
          <h2 className="subtitle is-4">
            ของรางวัล
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <p className="prize-header">In this PWA Online Hackathon Thailand. There are 4 following prizes</p>
          <div className="columns">
            <div class="column"><h2 className="title is-4 prize-title">The Winner</h2>
            <ul>
              <li>1 x Pixel Phone</li>
              <li><img src={gcpIcon} alt=""/> <br /> Google Cloud Credit 5,000 USD</li>
              <li><img src={jooxIcon} alt=""/> <br /> 5x 1 year Joox VIP codes</li>
              <li><img src={sellsukiIcon} alt=""/> <br /> 10,000 THB cash from Sellsuki</li>
            </ul>
          </div>
            <div class="column">
              <h2 className="title is-4 prize-title">1st Runnerup</h2>
              <ul>
                <li>1 x Chromebook</li>
                <li><img src={gcpIcon} alt=""/> <br /> Google Cloud Credit 3,000 USD</li>
                <li><img src={jooxIcon} alt=""/> <br /> 5x 1 month Joox VIP codes</li>
              </ul>
          </div>
            <div class="column">          
              <h2 className="title is-4 prize-title">2nd Runnerup</h2>
              <ul>
              <li>1 x Chromecast</li>
                <li><img src={gcpIcon} alt=""/> <br /> Google Cloud Credit 2,000 USD</li>
                <li><img src={jooxIcon} alt=""/> <br /> 5x 1 month Joox VIP codes</li>
              </ul>
            </div>
            <div class="column">
              <h2 className="title is-4 prize-title">Best Firebase Application</h2>
              <ul>
                <li><img src={gcpIcon} alt=""/> <br /> Google Cloud Credit 1,000 USD</li>
                <li><img src={jooxIcon} alt=""/> <br /> 5x 1 month Joox VIP codes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Prizes;
