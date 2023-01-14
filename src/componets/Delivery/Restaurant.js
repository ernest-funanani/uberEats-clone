import React from "react";
import { Link } from "react-router-dom";
import Promo from "../../assets/promo.jpg";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import "./Restaurant.css";

function Restaurant() {
  return (
    <div>
      <div className="deliv-point">
        <h2>Popular Nearby you</h2>
        <div className="rest-select">
          <Link to="/shop" className="food-types">
            <img
              src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
              alt=""
            />
            <div className="loc-point">
              <h4>kFC, Maredale </h4>
              <span>4.4</span>
            </div>

            <div className="foo-details">
              <HourglassFullIcon
                style={{ height: 14, width: 14, color: "green" }}
              />
              <p>᛫</p>
              <p>R8 Fee</p>
              <p>᛫</p>
              <p>30-40 min</p>
            </div>
          </Link>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deliv-point">
        <h2>Popular Nearby you</h2>
        <div className="rest-select">
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://fishaways.co.za/_next/image?url=%2Fimages%2Fbetter_choice_hake_salad.png&w=640&q=75"
                alt=""
              />
              <div className="loc-point">
                <h4>Fishway, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R3 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAk1BMVEUAAAD///8GwWcGxWk7OzsQEBD7+/sEcz0Ei0ri4uIGtGCXl5cGyWsGr10xMTEBGA0dHR0GumMFnFMFpVgmJiYBGw7t7e0DVS5YWFgEkU0BJBMCPyK/v79kZGSvr68EhEZ/f3/Z2dnKyspOTk4BNRwBLxkDXDEXFxdCQkJ2dnaNjY0DZTYCRiUEe0EDTSkADwikpKT7H+jeAAAE60lEQVR4nO2XaXeqOhSGgSgChsqgODHUCa3z//91J9lJIKhci9Keu87K+6FCBvJkZw+ppikpKSkpKSkpKSkpKSkpKSn9iDpJkky6csuWtCTit1szrU1ddV2PvAoUadG3mrYjP+bwFxD6ZCG7gvBBEcjuOyaBUwgK4f+G0B0OvUfR6Q2H219BSNJFZEaLdFKduN0vo8i048+iJSXaars0jr/aRNAmti60kCHSotkUC9KXYUz/9ttE6Ouy9mLMbiE3pyUCELSKYMIX7eWS24J/u8NeF3EcSQwlU5sIVFdwySGzPDM62OAKjxN4/iwR4onnNXPSZwhm4QAJfTfFHL1wuVg0V8+qPQTJuRNh46hq64ivTLuXzQmeIcRyD93vgthebJtrz5e+IW4LYSX3rFgP9YrU+xAaQuh88KBsHaHaA4sk7PBl0ebdTyEsqnk5Audf6g/0BgI9yGoxWr2EsHodAdy8I7f0JYSbixsbG9fE3qsIQ1O/yWZL2R0rHv5JexjjokUEyHTySUx0GWFxO3TJnWXXIgJ1Bin8vaiCIEoQ1VUEPkWxy/bV0nsPYQslZ8nnThiBVCNi7pFdKBJgFTCULRwoEfX6ZQTmkHqUfq0mn4WzS2XK7q86ndUe2CJmf7CHeV2RtJTAlOg9BOZlpSIJIWIYEbeNmfAp/MIS2azD3L2JoH2ZEkHsSQiLnS112WXw7mXoxYf2LgK5DETia0mZHemiXW0vIOxKLtjFxZRP3vQWAgm0pJ/G6Z5eDroTIv5Lq5SX9OM47U+8mymdr2tMpxQJlM77jX+DlZT+bY2te+W/i3DC6FY4ezJnNCMatYbQQ8atniKEmCj4qwgBmYOmLSM0O4ifQHDysaz130Bo5ls/gjCr6T2fpkEwPRCzjI5E84u2ns/XIUUIyNN8vmHjNjkMzPJnBmyKcHARhCz2p7MxJsu6Ay2oui64zXrqYzYQ+8G8RYRZiItoIRCII1QiCFmUFEltCB9aQ9gY1cWMOgRqH1ibE+PeSwiDewKHRavhOL7YJUUIqcWLOMaWNnAZXZBZoQ89fkOHYHkhlOVSHwswAGTH2WiTu7hA6JEa4sAzlJODdsRlNpuBjZqa4VFqIrs4w9YMsZ8MCQSqSlAeAEF8ziVGwuErCNUEvdb4kZcWzfB/I5z429nKLOtZdv0egiF/l2jm1CHM4ZCQMz2IJNFUDMGXhdba/MYImmahGoRLiERE+KF1eKGGP46IHBLR5a7lAYI2K6OX+AEKj68h3OYFesCo4lXjWgQSB0aZxIg1TlozPUbI71oP9QjEHzKaPATGS0F5h7CBmJRNOq3zBTEjz0hFYa5pXLQmqknQPhTD8n1dmxdkzU+QH1Gz+28NwgnyQFlxQlSHEJBwMiwx7ggn0axSMYTNYCSJ2HHjGxLDLLzLjoazvlBxWBG/gIDGzRFQJS8Y1KV7cKw47B3XecbDroKAkOu6zom5jWH0oOsMxQ3dV72nCDfZERKshXnCwUXECQQ+h1VKAYvJgSAY+vT6+10EiIEy2mWEgV9AUScIsEhMbHrYzAhkD7X/TfWKjINwAOM4gnb2+SwMfpiVOYEMnTbN0QfnTr5Ib6OTj+EggrF2dslNYir2d+mFLogN3WQOZjKmzVzxG5qd8/H8O5lmcBwf8vOLtVJJSUlJSUlJSUlJSUlJSUnpm/oDu7RkBUBQcNUAAAAASUVORK5CYII="
                alt=""
              />
              <div className="loc-point">
                <h4>Bismallah, Ormonde </h4>
                <span>4.2</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>KFC, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R16 Fee</p>
                <p>᛫</p>
                <p>30-45 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card"></div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deliv-point">
        <h2>Popular Nearby you</h2>
        <div className="rest-select">
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-types">
              <img
                src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT103.jpg?v=2.29"
                alt=""
              />
              <div className="loc-point">
                <h4>Debonairs pizza, Ormonde </h4>
                <span>4.4</span>
              </div>

              <div className="foo-details">
                <HourglassFullIcon
                  style={{ height: 14, width: 14, color: "green" }}
                />
                <p>᛫</p>
                <p>R12 Fee</p>
                <p>᛫</p>
                <p>30-40 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
