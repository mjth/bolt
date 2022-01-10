import { Field, Form } from 'react-final-form'

interface Values {
    email: string
    password: string
}

export default function SecondPage() {
    const onSubmit = async (values: Values) => {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 3000)
        })
    }

    const validate = (values: Values) => {
        const errors = {}
        const required = ['email', 'password']
        required.forEach((field) => {
            if (!values[field]) {
                errors[field] = 'Required'
            }
        })
        return errors
    }

    const subscription = { submitting: true, pristine: true }
    const initValues = { email: '' }

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            subscription={subscription}
            initialValues={initValues}
            render={({ handleSubmit, pristine, submitting, form }) => (
                <>
                    <form onSubmit={handleSubmit}>
                        <FieldExample
                            name="email"
                            type="email"
                            title="Email Address"
                            placeholder="Email Address"
                        />
                        <FieldExample
                            name="password"
                            type="password"
                            title="Password"
                            placeholder="Password"
                        />
                        <input
                            type="submit"
                            disabled={pristine || submitting}
                        />
                        <button onClick={() => form.reset()}>Reset</button>
                        {submitting && <span>Loading</span>}
                    </form>
                </>
            )}
        />
    )
}

function FieldExample({
    name,
    type,
    title,
    placeholder,
}: {
    name: string
    type: string
    title: string
    placeholder: string
}) {
    return (
        <Field name={name} type={type}>
            {({ input, meta }) => (
                <div>
                    <label>{title}</label>
                    <input {...input} placeholder={placeholder} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
            )}
        </Field>
    )
}
