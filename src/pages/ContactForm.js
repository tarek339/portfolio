import React, { useState } from 'react';
import {useFormik } from 'formik';
import * as Yup from 'yup';
import { Snackbar, Alert, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import { ThemeProvider } from '@emotion/react'

let theme = createTheme()
theme = responsiveFontSizes(theme)

theme.typography.body1 = {
    fontSize: '2rem',
    '@media (min-width:768px)': {
      fontSize: '3rem'
    }
  }

const validationSchema = Yup.object({
email: Yup
  .string()
  .email("Ungültige E-Mail")
  .required("Dies ist ein Pflichtfeld"),
phone: Yup
  .number()
  .typeError("Ungültige Telefonnummer"),
firstName: Yup
  .string()
  .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, "Keine Nummern oder Sonderzeichen erlaubt")
  .required("Dies ist ein Pflichtfeld")
  .min(3, "Ihr Name muss mindestens aus drei Buchstaben bestehen"),
lastName: Yup
  .string()
  .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, "Keine Nummern oder Sonderzeichen erlaubt")
  .required("Dies ist ein Pflichtfeld")
  .min(3, "Ihr Name muss mindestens aus drei Buchstaben bestehen"),
company: Yup
.string()
.matches(/^[aA-zZ\s/0123456789]+$/, "Keine Sonderzeichen erlaubt"),
genders: Yup
  .string()
  .required("Dies ist ein Pflichtfeld"),
checked: Yup
  .string()
  .oneOf(["true"], "Akzeptieren Sie die Datenschutzbestimmung")
});

const ContactForm = () => {
// Snackbar function
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const handleClick = () => {
  setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
  }
  setOpen(false)
  }
  // Snackbar function end

  const formik = useFormik({
    initialValues: {
        genders: "",
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        description: "",
        checked: false
    },
    validationSchema: validationSchema,
    onSubmit: async (values, {resetForm}) => {
      await axios.post('https://portfolio-backend-6e85.onrender.com', values)
      .then(res => {
        setOpen(true)
        setMessage(res.data.message)
        console.log(res.data)
        resetForm()
      })
      .catch((err) => {
        console.log(err.res.data.errorMessage)
          handleClick(
            setMessage(err.res.data.errorMessage)
          )
        })
    }
  })

  return (
    <div className='contact' id="contact">
    <ThemeProvider theme={theme}>
      <Typography style={{fontWeight:"bold", textAlign:"center", marginBottom:"1em",}} variant='body1'>Kontakt</Typography>
    </ThemeProvider>
      <form className="form" onSubmit={formik.handleSubmit} noValidate>
      <div className='select'>
      <select
        required
        name='genders'
        style={{width:"100%"}}
        value={formik.values.genders}
        onChange={formik.handleChange}
        className={formik.touched.genders ? formik.errors.genders && "input-error" :""}
      >
        <option value="" hidden>Anrede*</option>
        <option value="Frau">Frau</option>
        <option value="Herr">Herr</option>
      </select>
      {formik.touched.genders ? <div className='error'>{formik.errors.genders}</div> : null}
      </div>
      
      <div className='first-name'>
      <input
        style={{width:"100%"}}
        type="text"
        name="firstName"
        placeholder="Vorname*"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        className={formik.touched.firstName ? formik.errors.firstName && "input-error" :""}
      />
      {formik.touched.firstName ?  <div className='error'>{formik.errors.firstName}</div> : null}
      </div>
      
      <div className="last-name">
      <input
        style={{width:"100%"}}
        type="text"
        name="lastName"
        placeholder="Nachname*"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        className={formik.touched.lastName ? formik.errors.lastName && "input-error" :""}
      />
        {formik.touched.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
      </div>
      <div className="company">
      <input
        style={{width:"100%"}}
        type="text"
        name="company"
        placeholder="Firma"
        value={formik.values.company}
        onChange={formik.handleChange}
        className={formik.touched.company ? formik.errors.company && "input-error" :""}
      />
        {formik.touched.company ? <div className='error'>{formik.errors.company}</div> : null}
      </div>    
      
      <div className='e-mail'>
      <input
        style={{width:"100%"}}
        type="text"
        name="email"
        placeholder="E-Mail*"
        value={formik.values.email}
        onChange={formik.handleChange}
        className={formik.touched.email ? formik.errors.email && "input-error" :""}
      />
        {formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
      </div>

      <div className="phone-number">
      <input
        style={{width:"100%"}}
        name="phone"
        placeholder="Telefonnummer"
        value={formik.values.phone}
        onChange={formik.handleChange}
        className={formik.touched.phone ? formik.errors.phone && "input-error" :""}
      />
        {formik.touched.phone ? <div className='error'>{formik.errors.phone}</div> : null}
      </div>

      <textarea 
        className="text"
        cols="30" 
        rows="10" 
        placeholder="Ihre Nachricht..."
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />

      <div className='checkbox'>
      <input
        type="checkbox" 
        name='checked'
        checked={formik.values.checked}
        onChange={formik.handleChange}
        error={formik.touched.checkbox ? Boolean(formik.errors.checkbox) : undefined}
        id="checkbox_id"
        
        />
      <label 
        htmlFor='checkbox_id' 
        id='label'
        className={formik.touched.checked ? formik.errors.checked && "check-error" :""}
        >Ich habe die Datenschutz-Grundverordnung (siehe Link DSGVO unten rechts) gelesen und aktzeptiert.</label>
      {formik.touched.checked ? <div className='error'>{formik.errors.checked}</div> : undefined}
      </div>
      <button className="button" type="submit">Senden</button>
      </form>
      <Snackbar
        anchorOrigin={{
        vertical: 'top', 
        horizontal: 'left'
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
      <Alert variant="filled" severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
};
export default ContactForm
