<script>
  import instalogo from "$lib/assets/Icons/InstaLogo.png";
  import maillogo from "$lib/assets/Icons/MailLogo.png";
  import phone from "$lib/assets/Icons/phoneIcon.png";
</script>

<div class="footer" id="footer">
  <div class="footer-content">
    <table class="contact-info" role="presentation">
      <tbody>
        <tr>
          <td class="label">Instagram:</td>
          <td>
            <a href="https://www.instagram.com/aeromania_rvce/" target="_blank" rel="noopener noreferrer">
              aeromania_rvce
              <span class="icon-circle">
                <img src={instalogo} alt="Instagram Logo" />
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td>
            <a href="mailto:aeromaniarvce@gmail.com">
              aeromaniarvce@gmail.com
              <span class="icon-circle">
                <img src={maillogo} alt="Mail Logo" />
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td>
            <a href="tel:+918971866108">
              +91 89718 66108
              <span class="icon-circle">
                <img src={phone} alt="Phone Icon" />
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="slogan">
      <p>"Catch flights, not feelings"</p>
      <br />
      <a href="https://maps.app.goo.gl/wTsa5rAjbVsbWkeA7">
        <p>Aerospace Engineering</p>
        <p>R.V College of Engineering</p>
        <p>R.V Vidyanekethan Post, Mysore Road</p>
        <p>Bengaluru - 560059</p>
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Aeromania RVCE. All rights reserved.</p>
  </div>
</div>

<style>
  :global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  .footer {
    background-color: rgba(0, 0, 0);
    color: #fff;
    padding: 20px 0;
    border-top: 3px solid transparent;
    border-image: linear-gradient(to right, #00ddff, #ff007b);
    border-image-slice: 1;
    z-index: 10000; /* Ensure it's above all components */
    font-size: 1.2rem; /* Increased font size */
    position: relative;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 20px;
  }

  .contact-info {
    border-collapse: collapse;
    width: auto;
  }

  .contact-info td {
    padding: 8px;
    font-size: 1.2rem; /* Increased font size */
    vertical-align: top;
  }

  .label {
    font-weight: bold;
    color: #00ffff;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s, transform 0.2s;
  }

  a:hover {
    color: #00ffff;
    transform: scale(1.05);
  }

  .icon-circle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    border-radius: 50%;
    padding: 6px;
    margin-left: 8px;
  }

  .icon-circle img {
    width: 20px; /* Increased icon size */
    height: 20px;
  }

  .icon-circle:hover {
    background-color: #00ddff;
  }

  .slogan {
    text-align: right;
    font-size: 1.3rem; /* Increased font size */
    color: #ccc;
  }

  .footer-bottom {
    border-top: 1px solid #333;
    padding-top: 10px;
    font-size: 1.2rem; /* Increased font size */
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center; /* Center align text for smaller screens */
      text-align: center;
    }

    .slogan {
      text-align: center; /* Center align slogan for smaller screens */
    }

    .contact-info td {
      text-align: center; /* Center align contact info for smaller screens */
      display: block;
    }
  }
</style>
