import React, { createContext, useState } from "react";

export default function ContactForm() {

    const [credentials, setCredentials] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e, fieldName) => {
        setCredentials({
            ...credentials,
            [fieldName]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field"}>
                <input 
                    type={"text"} 
                    maxLength={255} 
                    placeholder={"Your name ..."}
                    onChange={(e) => handleChange(e, "fullname")} 
                    value={credentials.fullname}
                    required
                />
            </div>
            <div className={"form-field"}>
                <input 
                    type={"email"} 
                    maxLength={255} 
                    placeholder={"Your email ..."}
                    onChange={(e) => handleChange(e, "email")} 
                    value={credentials.email}
                    required
                />
            </div>
            <div className={"form-field"}>
                <input 
                    type={"text"} 
                    maxLength={255} 
                    placeholder={"Object of the message ..."}
                    onChange={(e) => handleChange(e, "subject")} 
                    value={credentials.subject}
                    required
                />
            </div>
            <div className={"form-field"}>
                <textarea 
                    placeholder={"Your message ..."}
                    onChange={(e) => handleChange(e, "message")}
                    value={credentials.message}
                    required
                ></textarea>
            </div>
            <div className={"form-button"}>
                <button className={"btn btn-blue"} type={"submit"}>Submit</button>
            </div>
        </form>
    )
}