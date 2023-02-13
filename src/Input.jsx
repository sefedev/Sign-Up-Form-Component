import React from 'react'

const Input = ({type,name,placeholder,value,errors,formData}) => {

    const handleChange = (e) => {
        formData.setFormData({
          ...formData.formData,
          [e.target.name]: e.target.value,
        });
        console.log(e.target.name)
      };

      

  return (
    
        <div className="relative mb-4">
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={value}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-4 w-full"
                />
                {errors[name] && (
                  <div className="absolute inset-y-4 right-2">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRrule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                  </div>
                )}
                {errors[name] && (
                  <p className="flex justify-end text-xs mt-1 text-red-600">
                    {errors[name]}
                  </p>
                )}
              </div>
    
  )
}

export default Input