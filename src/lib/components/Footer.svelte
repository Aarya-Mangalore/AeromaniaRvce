<script>
  import instalogo from "/Icons/InstaLogo.png";
  import maillogo from "/Icons/MailLogo.png";
  import phone from "/Icons/phoneIcon.png";
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
            <a href="mailto:aeromania@rvce.edu.in">
              aeromania@rvce.edu.in
              <span class="icon-circle">
                <img src={maillogo} alt="Mail Logo" />
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td>
            <a href="tel:+918792159569">
              +91 87921 59569
              <span class="icon-circle">
                <img src={phone} alt="Phone Icon" />
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="slogan">
      <p>"Pushing Boundaries of Aeronautics"</p>
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
  .footer {
    position: relative;
    background-color: rgba(0, 0, 0);
    color: #fff;
    padding: 20px 0;
    border-top: 3px solid transparent;
    border-image: linear-gradient(to right, #00ddff, #ff007b);
    border-image-slice: 1;
    z-index: 10;
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
    font-size: 1rem;
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
    width: 18px;
    height: 18px;
  }

  .icon-circle:hover {
    background-color: #00ddff;
  }

  .slogan {
    text-align: right;
    font-size: 1.1rem;
    color: #ccc;
  }

  .footer-bottom {
    border-top: 1px solid #333;
    padding-top: 10px;
    font-size: 14px;
    text-align: center;
  }
</style>
