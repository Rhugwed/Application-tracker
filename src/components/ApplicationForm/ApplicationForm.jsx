import styles from './ApplicationForm.module.css';
import Button  from '../Button/Button';

const ApplicationForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.application_form}>
            <form>
                
                <div className={styles.form_control}>
                    <label htmlFor="name">Company Name</label>
                        <input type="text" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="date">Application Date</label>
                        <input type="text" name="date" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="position">Position</label>
                        <input type="text" name="position" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="jdlink">Job Discription Link</label>
                        <input type="text" name="jdlink" />    
                </div>
                <div className={styles.submit_button}>
                        <Button text="SUBMIT"></Button>
                    </div>
                
            </form>
        </div>
    </section>
  )
}

export default ApplicationForm