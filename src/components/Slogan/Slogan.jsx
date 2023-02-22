import "./Slogan.css";
import Cross from "../../assets/images/cross.png";
import Arrow from "../../assets/images/arrow.png";

function SloganContainer() {
  return (
    <div className="slogan main-container">
      <h1 className="primary__heading">Free slogan maker</h1>
      <p className="primary__text">
        Simply enter a term that describes your business, and get up to 1,000
        relevant slogans for free.
      </p>
      <div className="slogan__input-container">
        <p>Word for your slogan</p>
        <div className="input__style">
          <input type="text" placeholder="cozy" value="cozy" />
          <img src={Cross} alt="cancel" />
        </div>
        <button className="btn slogan__generate-btn">Generate slogans</button>
      </div>
      <hr/>
      <div className="slogan__container">
          <div className="slogan__container-header">
              <p>We have generated 1,023 slogans for “cozy”</p>
              <button className="btn download__btn">Download all</button>
          </div>
          <div className="slogan__chips-container">
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <div className="copy__status">
                      <p>Click to copy</p>
                  </div>
              </div>
              <div className="slogan__chip">
                  <p>Review the facts cool is the best.</p>
              </div>
              <div className="slogan__chip">
                  <p>Review the facts cool is the best.</p>
                  <div className="copy__status copied">
                      <p>Copied!</p>
                  </div>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
              <div className="slogan__chip">
                  <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
              <div className="slogan__chip">
                  <p>coziness building for tomorrow.</p>
              </div>
          </div>
          <hr className="hr"/>
          <div className="pagination">
              <p className="selected">1</p>
              <p>2</p>
              <p>3</p>
              <p>...</p>
              <p>21</p>
              <div>
              <p className="next__btn">Next</p>
              <img src={Arrow} alt="arrow"/>
              </div>
          </div>
      </div>
    </div>
  );
}

export { SloganContainer };
