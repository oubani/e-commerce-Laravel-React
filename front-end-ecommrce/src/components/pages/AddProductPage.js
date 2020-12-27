import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { authApi, getCategories } from '../../Api/Api';
import { toast, ToastContainer } from 'react-toastify';

const AddProductPage = () => {
  // const link = process.env.REACT_APP_DOMAIN;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getCategories();
      console.log('results ::=======>' + res);
      setCategories(res);
    };

    // call function
    getData();
  }, []);

  return (
    <>
      <div className='container'>
        <ToastContainer />
        <center>
          <h1>Add Product</h1>
        </center>
        <Formik
          initialValues={{
            name: '',
            description: '',
            stock: '',
            prix: '',
            promotion: false,
            thumbnail: '',
            category_id: '',
          }}
          onSubmit={async (values, { setSubmitting }) => {
            alert(JSON.stringify(values));
            try {
              const response = await authApi.post('/addProduct', values);
              toast.success(response.data.message);
              console.log(response);
            } catch (error) {
              toast(error.data.message);
            }
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('this field is required')
              .max(5, 'more then 5 Character')
              .max(20, 'this field required more then 20 Cha'),
            stock: Yup.number()
              .moreThan(0, 'numbet should be positive')
              .required('this feild is rerquired and should a number '),
            prix: Yup.number()
              .moreThan(0, 'numbet should be positive')
              .required('this feild is rerquired and should a number '),
            category_id: Yup.number()
              .moreThan(0, 'select a category')
              .required('this feild is rerquired select category '),
            description: Yup.string()
              .min(40, 'more then 40')
              .max(200, 'little then 200')
              .required('this feild is rerquired '),
            thumbnail: Yup.mixed().required(),
          })}
        >
          <Form style={styles.form} className='addForm'>
            <div style={styles.formController}>
              <label htmlFor='name' style={styles.inputLabel}>
                Name :
              </label>
              <div style={{ width: '80%' }}>
                <Field name='name' type='text' style={styles.inputField} />
                <p style={styles.errorMessage}>
                  <ErrorMessage name='name' />
                </p>
              </div>
            </div>

            <div style={styles.formController}>
              <label htmlFor='stock' style={styles.inputLabel}>
                Stock :
              </label>
              <div style={{ width: '80%' }}>
                <Field name='stock' type='number' style={styles.inputField} />
                <p style={styles.errorMessage}>
                  <ErrorMessage name='stock' />
                </p>
              </div>
            </div>

            <div style={styles.formController}>
              <label htmlFor='description' style={styles.inputLabel}>
                Description :
              </label>
              <div style={{ width: '80%' }}>
                <Field
                  name='description'
                  type='text'
                  style={styles.inputField}
                  required
                />
                <p style={styles.errorMessage}>
                  <ErrorMessage name='description' />
                </p>
              </div>
            </div>

            <div style={styles.formController}>
              <label htmlFor='prix' style={styles.inputLabel}>
                Price :
              </label>
              <div style={{ width: '80%' }}>
                <Field name='prix' type='number' style={styles.inputField} />
                <p style={styles.errorMessage}>
                  <ErrorMessage name='prix' />
                </p>
              </div>
            </div>

            <div style={styles.formController}>
              <label htmlFor='thumbnail' style={styles.inputLabel}>
                thumbnail :
              </label>
              <div style={{ width: '80%' }}>
                <Field
                  name='thumbnail'
                  type='file'
                  style={styles.inputFile}
                  required
                />
                <p style={styles.errorMessage}>
                  <ErrorMessage name='thumbnail' />
                </p>
              </div>
            </div>

            <div style={styles.formController}>
              <label htmlFor='category_id' style={styles.inputLabel}>
                Category_id :
              </label>
              <div style={{ width: '80%' }}>
                <Field
                  name='category_id'
                  component='select'
                  style={styles.inputField}
                  required
                >
                  <option value='0'>select a category</option>
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </Field>
                <p style={styles.errorMessage}>
                  <ErrorMessage name='category_id' />
                </p>
              </div>
            </div>

            {/* submit button */}
            <button style={styles.submitButton} type='submit'>
              Add Product
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
console.log(window.innerWidth < 800 ? '50%' : '100%');

const styles = {
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  formController: {
    display: 'flex',
    marginBottom: '10px',
    flex: window.innerWidth > 800 ? '0 49%' : '100%',
    justifyContent: 'space-between',
  },
  inputLabel: {
    color: 'var(--main-blue-color)',
    fontSize: '16px',
    width: '20%',
  },
  inputField: {
    border: '2px solid var(--main-blue-color)',
    padding: '5px 15px',
    borderRadius: '5px',
    width: '100%',
  },
  inputFile: {
    // border: '2px solid var(--main-blue-color)',
    padding: '5px 15px',
    // borderRadius: '5px',
    width: '100%',
  },
  errorMessage: {
    color: 'red',
  },
  submitButton: {
    backgroundColor: 'var(--main-blue-color)',
    color: 'var(--main-white-color)',
    width: '100%',
    padding: '10px',
    border: 'none',
    fontSize: '1rem',
  },
};

export default AddProductPage;
