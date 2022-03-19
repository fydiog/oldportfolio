<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fidel Mangold - Web Designer</title>
    <link rel="icon" href="favicon.ico" type="image/ico" />
    <link rel="stylesheet" href="css/style.css" />
    <script
      src="https://kit.fontawesome.com/a9c2374661.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    <!-- container start -->
    <div id="container">
      <div class="loader" id="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!-- header start -->
      <header class="header">
        <nav class="menu_desk">
          <a href="#main_container">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact" class="no_margin">Contact</a>
        </nav>

        <div class="menu_mob">
          <nav role="menu_nav">
            <div id="menuToggle">
              <input type="checkbox" id="chk-mob" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu-mobile">
                <li><a href="#main_container">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="theme-switch-wrapper" id="theme-switcher">
          <label class="theme-switch" for="chk">
            <input type="checkbox" class="checkbox" id="chk" />
            <div class="slider round">
              <i class="far fa-lightbulb"></i>
            </div>
          </label>
        </div>
      </header>
      <!-- header end -->

      <!-- seccion principal -->
      <div class="main_container" id="main_container">
        <div class="email">
          <a href="mailto:fydiog@gmail.com">fydiog@gmail.com</a>
        </div>
        <div class="wrapper">
          <div class="main_text">
            <h1 class="firstname">
              Fidel <span class="lastname">Mangold</span>
            </h1>
            <p>WEB DESIGNER</p>
          </div>
        </div>
        <video autoplay muted loop id="bg-video" class="bg-video">
          <source src="video/background-video.mp4" type="video/mp4" />
        </video>

        <div id="arrowdown">
          <div class="line-down"></div>
        </div>
      </div>
      <!-- seccion principal end -->

      <!-- ABOUT SECTION -->
      <section class="about" id="about">
        <div class="about_container">
          <div class="about_content">
            <div class="left">
              <img src="img/IMG_20200930_103124.jpg" alt="" />
            </div>
            <div class="right">
              <h2>FIDEL MANGOLD<span class="text-bg-about">ABOUT</span></h2>
              <p>Web designer and software developer</p>
              <div class="divider-line"></div>
              <p>
                My name is Fidel Mangold, I am a junior web designer and
                software developer. I am a technology and graphic design
                enthusiast.
              </p>
              <p>
                From a young age I began to mess with computers and to be
                self-taught, all this has given me the experience to make any
                project a success. I enjoy every part of the process and always
                work with the utmost detail.
              </p>
              <a
                href="img/pdf/CV_FidelMangold.pdf"
                download=""
                class="white-btn download-btn"
                >Download CV</a
              >
            </div>
          </div>
        </div>
      </section>
      <!-- ABOUT SECTION END -->

      <!-- SERVICES SECTION -->
      <section class="services" id="services">
        <div class="services_container">
          <div class="services_title">
            <h2>WHAT I CAN DO<span class="text-bg-services">SERVICES</span></h2>
            <p>let me show you what I can do for you...</p>
          </div>
          <div class="service_cards">
            <div>
              <i class="fas fa-laptop-code"></i>
              <h3>WEB DESIGN</h3>
              <p>
                Web development services involve the design, construction,
                integration, scaling, and maintenance of software solutions that
                work on the internet or intranet. I offer web solutions that are
                visually appealing and fully functional.
              </p>
            </div>
            <div>
              <i class="fas fa-pencil-ruler"></i>
              <h3>GRAPHIC DESIGN</h3>
              <p>
                Graphic design has no limits, whether you are looking for a new
                logo for your brand or you need some spectacular flyers for an
                event, we can talk about your ideas and adjust to your budget.
              </p>
            </div>
            <div>
              <i class="fas fa-file-code"></i>
              <h3>SOFTWARE DEVELOPMENT</h3>
              <p>
                Software development services is a complicated process. I work
                hard in order to meet your particular goals or business. For me,
                this process consists of various stages: Planning, Analysis,
                Product Design, Development & Implementation, Testing,
                Maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SERVICES SECTION END -->

      <!-- PORTFOLIO SECTION START -->
      <section class="portfolio" id="portfolio">
        <div class="portfolio_container">
          <div class="portfolio_title">
            <h2>
              SOME OF MY WORK<span class="text-bg-portfolio">PORTFOLIO</span>
            </h2>
          </div>
          <div class="portfolio_gallery">
            <div class="portfolio_img">
              <a href="https://imgur.com/a/A1wSXNP">
                <img src="img/portfolio-2.png" alt=""
              /></a>
            </div>
            <div class="portfolio_text">
              <p>
                <strong>"Fyfit"</strong> <br /><br />
                This was my first real project. <br />My personal training app,
                I always wanted to have a simple way to track my workouts, so I
                made the perfect app for myself. Coded in Android (Java) +
                Firebase Database.
              </p>
            </div>
            <div class="portfolio_text">
              <p>
                <strong>"F-ware"</strong> <br /><br />A small script for
                videogame Rust that eliminates any recoil from guns. Coded in
                C++ as a WindowsConsoleApp.
              </p>
            </div>
            <div class="portfolio_img">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eMtY8xUAePI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="portfolio_img">
              <img src="img/construction1.jpg" alt="" />
            </div>
            <div class="portfolio_text">
              <p>
                <strong>"COMING SOON"</strong><br /><br />Give me a break. I'm
                probably busy coding to fill up this spot :)
              </p>
            </div>
            <div class="portfolio_text">
              <p>
                <strong>"COMING SOON"</strong><br /><br />Give me a break. I'm
                probably busy coding to fill up this spot :)
              </p>
            </div>
            <div class="portfolio_img">
              <img src="img/construction2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <!-- PORTFOLIO SECTION END -->

      <!-- CONTACT SECTION -->
      <section class="contact" id="contact">
        <div class="contact_container">
          <div class="contact_title">
            <h2>NEED MORE INFO?<span class="text-bg-contact">CONTACT</span></h2>
            <p>
              If you need additional information or want to get in touch with me
              feel free to fill this form. You can also call me between 9:00
              a.m. and 6:00 p.m. GMT.
            </p>
          </div>
          <div class="contact_wrapper">
            <div class="left-form">
              <div class="form_fields">
                <form class="contact_form" method="POST">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Name"
                  /><br />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <textarea id="message" placeholder="Message"></textarea>
                  <a href="#" class="white-btn send_form_btn">Send</a>
                </form>
              </div>
            </div>

            <div class="right-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.7942483173545!2d-3.7069036636720347!3d40.43162288393842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228600d4e3217%3A0xd55d707e5c7b0c93!2sCEI%3A%20ESCUELA%20DE%20DISE%C3%91O%20-%20Cursos%20y%20M%C3%A1ster%20de%20Dise%C3%B1o%20Gr%C3%A1fico%2C%20Interiores%2C%20Web%2C%20VFX%20-%20Motion%20Graphics%20y%20SEO%20y%20m%C3%A1s%20Marketing%20Digital!5e0!3m2!1ses!2ses!4v1609432335072!5m2!1ses!2ses"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <!-- CONTACT SECTION END -->

      <!-- FOOTER START -->
      <footer>
        <div class="email-phone">
          <span><a href="">fydiog@gmail.com</a></span>
          <span>+34 666 666 666</span>
        </div>
        <div class="socials">
          <a href="https://linkedin.com/in/fidelmangold" target="_blank"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="https://github.com/fydiog" target="_blank"
            ><i class="fab fa-github-square"></i
          ></a>
          <a href="https://twitter.com/fidelmangold" target="_blank"
            ><i class="fab fa-twitter-square"></i
          ></a>
          <a href="mailto:fydiog@gmail.com" target="_blank" class="no_margin"
            ><i class="fas fa-envelope-square"></i
          ></a>
        </div>
      </footer>
      <!-- FOOTER END -->

      <!-- container end -->
    </div>

    <!-- JS FRAMEWORK  -->
    <script src="js/jquery-3.5.1.js"></script>
    <script src="js/snap-scroll.js"></script>
    <!-- JS PROPIO -->
    <script type="text/javascript" src="js/script.js"></script>

  </body>
</html>