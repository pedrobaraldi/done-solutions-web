import ReCAPTCHA from "react-google-recaptcha";

type ReCaptchaProps = {
  onChange: (token: string | null) => void;
};

const ReCaptcha = ({ onChange }: ReCaptchaProps) => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
    </div>
  );
};

export default ReCaptcha;

