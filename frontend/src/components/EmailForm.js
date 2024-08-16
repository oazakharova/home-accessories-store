import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './EmailForm.module.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState({ data: false, terms: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent.data || !consent.terms) {
      toast.error('Please agree to the terms and conditions.');
    } else {
      toast.success('Thank you for subscribing!');
      setEmail('');
      setConsent({ data: false, terms: false });
    }
  };

  return (
    <section className={`${styles.emailFormWrap} container mb`}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>
        Be the first to know
      </h2>
      <form className={styles.emailForm} onSubmit={handleSubmit}>
        <div className={styles.inputWrap}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.submitButton}>
            {'>'}
          </button>
        </div>
        <div>
          <div>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={consent.data}
                onChange={(e) =>
                  setConsent({ ...consent, data: e.target.checked })
                }
              />
              I agree to the processing of personal data
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={consent.terms}
                onChange={(e) =>
                  setConsent({ ...consent, terms: e.target.checked })
                }
              />
              I agree with the site rules
            </label>
          </div>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default EmailForm;
