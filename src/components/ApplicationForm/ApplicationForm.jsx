import styles from './ApplicationForm.module.css';
import Button  from '../Button/Button';

const data = [
    { Cname: "accenture", Adate: 19, pos: "pos", status: "status", JDlink: "link" },
    { Cname: "accenture", Adate: 19, pos: "pos", status: "status", JDlink: "link" }
]

const ApplicationForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.application_form}>
            <h2>Application Tracker</h2>
            <form>
                
                <div className={styles.form_control}>
                    <label htmlFor="name">Company Name</label>
                        <input type="text" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="date">Application Date</label>
                        <input type="date" name="date" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="position">Position</label>
                        <input type="text" name="position" />
                </div>
                <div className={styles.form_control}>
                     
                        <label htmlFor="status">Application Status</label>
                        <input type="text" name="status" />    
                </div>
                
                
                
            </form>
            <div className={styles.form_control}>
            <label htmlFor="jdlink">Job Discription Link</label>
                        <input type="text" name="jdlink" />  
                </div>
            <div className={styles.submit_button}>
                <Button text="SUBMIT"></Button>
            </div>

            <div className={styles.table_display}>
            <table>
                <tr>
                    <th>Comapany Name</th>
                    <th>Application Date</th>
                    <th>Position</th>
                    <th>Application Status</th>
                    <th>Job Discription Link</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Cname}</td>
                            <td>{val.Adate}</td>
                            <td>{val.pos}</td>
                            <td>{val.status}</td>
                            <td>{val.JDlink}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </div>
        
    </section>
  )
}

export default ApplicationForm