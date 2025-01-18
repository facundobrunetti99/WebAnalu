import React from "react";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container coteiner">
      <div className="container container-items-footer row">
        <div className="col col1">
          <p className="tex-a" href="#">
            Contactanos
          </p>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              ></path>
              <polygon
                fill="#e53935"
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
              ></polygon>
              <path
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              ></path>
              <path
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              ></path>
            </svg>
            <span className="text-mail">analupasteleria@gmail.com</span>
          </div>
          <div>
          
            <a href="https://www.instagram.com/analu.v.m.s.l/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd5"></stop>
                <stop offset=".328" stop-color="#ff543f"></stop>
                <stop offset=".348" stop-color="#fc5245"></stop>
                <stop offset=".504" stop-color="#e64771"></stop>
                <stop offset=".643" stop-color="#d53e91"></stop>
                <stop offset=".761" stop-color="#cc39a4"></stop>
                <stop offset=".841" stop-color="#c837ab"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#4168c9"></stop>
                <stop
                  offset=".999"
                  stop-color="#4168c9"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
             <span className="text-instagram">Analu.vm</span>
            </a>
           
          </div>
        </div>
        <div className="col col2">
          <div className="div-logo-analu">
            <a href="" className="img-cake">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYNJREFUWEftV8uRwjAMFWXoxnayVLJQyUIlQCWbTuCmMnbzPJZx/Bl/8E4u8QwHJor0JD09OTta+exWjk9vARCRT5vAk5mfPcl0AxCRPRE9bNAzM182AEMr4PU35xctuNqHNyK6FwAkeRJxQES+Z0fnnmwq3pmI6OQTdgHgn4MrPkzLQUE4AAGrYYyydo1WphLH2SfahoMqwP9LB0aNVa4Ngf8bM59CABCVnxBhRV+rTeYW/1rjiZkPG4AhFUBva/dASwvAfmg7ehVNgoiA0dALZbVOzSVjD37BXpdXkQNKrEg4RAREVUchARczjocZbakGoAGgjMgWgcOs8V9/PnCAh30KbBEAAvrCkcoUYoIg5ogI9gLeyR2MnY55EYBRKus0lXWu1+hzCNwsKoBtIaGTSpsdQBgy1jDebtLIvhtAtdQVDDcALRVw7B5VfutHR9JdYsMLCW65/pwPju/cfUQXEo/tXwnBGQUElcVImsvIYhmNitDqp/vDpDVQzn4DsHoF/gCzdvYhEoV7TQAAAABJRU5ErkJggg==" />
            </a>
            <a className="p-analu analu-footer" href="#">
              Analu <p className="p-pasteleria">Pasteleria</p>
            </a>
          </div>
        </div>
        <div className="col col3">
          <p className="tex-a" href="#">
            Telefono y Whatsapp
          </p>

          <div>
            <img
              className="img-tel"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAiFJREFUWEftlk1OwlAQx2consO6oIm3gKUBzwCcQUzcATsT4QzWMyhxKZ7CBBZwDymj79lphtfph4XGjV2Z8ur/N5//h/DHD/6xPpQCGD2v27Pr1rIO2FyAu9cPfxd5jwDQJoDtvBdcnBoiE0CKs2gdECqAJl4XhAowelm9mbQbURP1mRd1PiPvDQF8fneqcqQAbherARGYultxFjJZqQMiBXDzstpwpLNecPB7HRCZAFkNZ0YSkEyJ7NP0oov7q8tt1elIAXD9NYC4OTdCbDnrBZ2q4ua7TAAtOlme7yY9WlwHWKzHQDSxURF2eAPK6E+5D9IZEDUmgHDeC4ac4rzyVC1DCiAv0pHMDuJk1m1Nqwrzd/oiEkKIMHzoBqH5wIUzC+qYCVB7QBOSW+8gCxmNaEH3zT4R+bKEWrYyzUiuYxDpdn3CNCQSDp1mtQ5aZm0XuaGdeU1ErmU+00CYEkGfxcsYWO59QKbbHT1OczKyTn7N+bjGuQZWeCNynPFgLI1AvJrHMmqGLeMdhQDaP9G635yL9l6bAM/leBZBFAK4U5H0BGJYdg8oEEkmSwEwhNJ4IRI+FV1YXROTu6U0QJKJfbOvNN4SEZ54Ycl+LHLQXwEknrBYj4lowBcXOW7x38sGwrstV3y74veufVcC4GzYplPmPsMfVPuuDJBK809pzPazG/DgyTGukwC4erbuu6aPDfK1vpDnawHIKIH6+h/gC+3niDBUVY07AAAAAElFTkSuQmCC"
            />
            <span className="tel">2657331322</span>
          </div>
          <div>
            <img
              className="img-wp"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAldJREFUWEftVstRAkEQfVOFeWAIGwFQYpUhLCcxEjES8cSGYJVQYAQbAuQBOtr0zs7/gxcvzGULdrbn9ev3elrgn5f45/NxBXAxA3U7HQMYCWAMyKEuoThIYAfgs6nW9CxaxQDqdvr8u3lRFBXYSeClBEgWQN0+DAVOrzhnTEt2mYoDZQsMDsDXGPgeCQhipNsHSGDRVOuXFOgkAKJbAFsVoCSgC1hCLptq8xQDEQXQBdrrrG8mTfVOWWcXfQucHlXJUiCiAGbtlDInOneraj3JnhrYYDIoIZ6a6mPpbgsCqNv7uYCkulMdJ0pMnNnXOBQoBrBu714FxJy0s6o2t0UAZu3dHhBDs+Yl2YRAcCmPW47ns+AxYGa/qtb9e50JOyGUTZyFXsxeOQMAmDJXOIoVwxF9aXL60IL2gV8AoBclnXeRME1HmZqiQB4ApX63XrYGtDBz2av3Oq79bQKAf4i2JnXD8r5AIJSG3MSKGeAgWtHckm0QJOCYRQ1nWdoJaIAvnVjb9UGIJfV7fVkRMP7PLM+snf6GpL4yuDU7aghA1//jVrNBsC3J5+aBJtUxawdFmFKseYDb710xmplqAfoXU6QV93d/1m4GkH5A4ex5KLHbuk1/kAHnoyyAlA1tNsPXcoSBcDcs9bx2TD/IRBMJAnAt09E8LBmx+HBzfEv3jAgAZRksePj0xrE3F4ytBb0/d2klb0Obctdq9PssI3r2c6BxWWXnwYgN9QBBDYU2qabCWR6fecAIrXATSmknyEDJxMNgaJ3Oz1J9uGCyY/klyv/L3iuAH1SGpTB6kbfzAAAAAElFTkSuQmCC"
            />
            <span className="tel-wp">2657314542</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
