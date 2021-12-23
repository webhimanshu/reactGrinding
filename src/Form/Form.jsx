import React,{useState} from 'react'
import '../Form/form.css';
import json from '../Country.json';
const Form = () => 
{
    const [state, setstate] = useState(
        {
            emp_id:"",
            emp_name:"",
            emp_dob:"",
            emp_salary:"",
            emp_gender:"",
            emp_designation:"",
            emp_skills:[],
            emp_country:"",
            emp_edu:"",
            emp_exp:"",
            emp_description:"",
        })
    const arr= json;
    console.log(arr);
        const {emp_id,emp_name,emp_dob,emp_salary,emp_designation,emp_skills,emp_country,emp_exp,emp_edu,emp_description}=state;
        const handleSkills=(e)=>
        {
            const name=e.target.name;
            const value=e.target.value;
           console.log(name,value);
            emp_skills.push(value);
            setstate({...state,[name]:emp_skills});
        }
        const handleSubmit=(e)=>
        {
            e.preventDefault();
           console.log(state);
        };
        const handleChange=(e)=>
        {
         
           const name=e.target.name;
           const value=e.target.value;
           setstate({...state,[name]:value});
         
        }
    return (
        <>
        <section className="container">
        <form  onSubmit={handleSubmit} className="form-container">
         <div  className="form-div">
            <label  htmlFor="emp_id" >Enter Emp Id:</label>
            <input type="text" name="emp_id" value={emp_id}  onChange={handleChange}/>
         </div>
         <div className="form-div">
             <label htmlFor="emp_name">Enter Emp name</label>
             <input type="text" value={emp_name} onChange={handleChange} name="emp_name"/>
         </div>
         <div className="form-div" >
             <label htmlFor="emp_dob">Enter your dob:</label>
             <input type="date" value={emp_dob} onChange={handleChange} name="emp_dob"/>
         </div>
         <div className="form-div" >
             <label htmlFor="emp_salary">Enter Your salary</label>
             <input type="number" value={emp_salary} onChange={handleChange} name="emp_salary"/>
         </div>
         <div onChange={handleChange} className="form-div">
         <label htmlFor="emp_gender">Enter Your Gender</label>
         <input type="radio" value="male" name="emp_gender" />Male
         <input type="radio"  value="female" name="emp_gender"/>Female
         </div>
         <div className="form-div">
             <label htmlFor="emp_designation">Enter Emp designation</label>
            <input type="text" value={emp_designation} name="emp_designation" onChange={handleChange}/>
            </div>

            <div   onChange={handleSkills} className="form-div">
            <label htmlFor="emp_skills">Enter Emp Skills</label>
            <input type="checkbox" value="java" name="emp_skills" />Java
            <input type="checkbox" value="JavaScript" name="emp_skills" />JavaScript
            <input type="checkbox" value="Spring" name="emp_skills" />Spring
            <input type="checkbox" value="React" name="emp_skills" />React
            <input type="checkbox" value="Hibernate" name="emp_skills" />Hibernate
            </div>

            <div className="form-div" >
            <label htmlFor="emp_country">Country</label>
            <select onChange={handleChange}   value={emp_country} name="emp_country">
                {
                    arr.map((value,index)=>
                    (
                        <option  key={index} value={value} >{value}</option>
                    ))
                }
            </select>
            </div>

            <div className="form-div">
                <label  htmlFor="emp_exp">Enter Emp Exp</label>
                <input type="number"  value={emp_exp} name="emp_exp" onChange={handleChange}/>
            </div>

            <div className="form-div">
                <label htmlFor="emp_edu">Emp Education</label>
                <input type="text" value={emp_edu} name="emp_edu" onChange={handleChange}/>
            </div>
            <div className="form-div">
                <label htmlFor="emp_description">Emp Description</label>
                  <textarea rows="5" value={emp_description} onChange={handleChange} name="emp_description"/>
                        </div>
<div className="form-div">

    <input type="submit" value="submit"/>
</div>
        </form>
          
</section>
        </>
    )
}

export default Form
