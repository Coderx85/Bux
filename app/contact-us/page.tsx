import React from 'react'
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input'; 
import { Textarea } from '@/app/components/ui/textarea';
import { FaEnvelope, FaPhone, FaLocationArrow, FaGithub } from 'react-icons/fa'

const contactInfo = [
  {
    title: 'Email',
    description: 'xxxxxxx@gmail.com',
    icon: <FaEnvelope />
  },
  {
    title: 'Phone',
    description: '(+91) XXX XXX XXXX',
    icon: <FaPhone />
  },
  {
    title: 'Location',
    description: 'New Delhi, India',
    icon: <FaLocationArrow />
  },
  {
    title: 'GitHub',
    description: 'coderx85',
    icon: <FaGithub />
  }
]

const Contact = () => {
  return (
    <div className='container h-full mx-auto pt-32'>
        <div className="flex flex-col xl:flex-row gap-[30px] border-input border-2 bg-black rounded-2xl">
          <div className='xl:h-[54%] order-3 xl:order-none'>
            <form 
              // onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 rounded-xl"
            >
              <h2 className="text-4xl text-primary border-b-4 border-primary">
                Let&apos;s Work Together
              </h2>
              <p className="text-white/60">
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="email"
                  id="email"
                  required
                  placeholder="Email address"
                  // onChange={(e) => {
                  //   setFormData({ ...formData, email: e.target.value });
                  // }}
                />
                <Input
                  type="text"
                  id="name"
                  placeholder='Name'
                  required
                  // onChange={(e) => {
                  //   setFormData({ ...formData, name: e.target.value });
                  // }}
                />
                <Input
                  type="text"
                  id="company"
                  placeholder='Company'
                  required
                  // onChange={(e) => {
                  //   setFormData({ ...formData, company: e.target.value });
                  // }}
                />
                <Input
                  type="text"
                  id="phone"
                  placeholder='Phone'
                  required
                  // onChange={(e) => {
                  //   setFormData({ ...formData, phone: e.target.value });
                  // }}
                />

              </div>
                <Textarea
                  name="message"
                  id="message"
                  className="h-[200px]"
                  placeholder="Let's talk about..."
                  required
                  // onChange={(e) => {
                  //   setFormData({ ...formData, message: e.target.value });
                  // }}
                />  
              <Button
                type="submit"
                className=" font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className='xl:flex flex-1 hidden items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10 mr-10'>
                {contactInfo.map((info, index) => {
                    return <li key={index} className='flex bg-dark-200 items-center gap-6'>
                        <div className='size-[52px] xl:size-[72px] bg-dark-1 text-primary rounded-md flex items-center justify-center'>
                        <div className='text-[28px] text-primary'>{info.icon}</div>
                        </div>
                        <div className='flex-1 pr-10'>
                        <p className='text-white/60'>{info.title}</p>
                        <h3 className='text-md text-secondary'>{info.description}</h3>
                        </div>
                    </li>
                })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact