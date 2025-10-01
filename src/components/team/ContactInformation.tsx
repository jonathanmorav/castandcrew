import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
const contacts = [{
  name: "Paul Gable",
  title: "CEO",
  email: "paul@cakewalkbenefits.com"
}, {
  name: "Bill Kennedy",
  title: "CRO",
  email: "bill@cakewalkbenefits.com"
}, {
  name: "Niv Ben-Dor",
  title: "CPO",
  email: "niv@cakewalkbenefits.com"
}, {
  name: "Jonathan Morav",
  title: "COO",
  email: "jonathan@cakewalkbenefits.com"
}];
const ContactInformation = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.8
  }} className="mb-12 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
      <h2 className="mb-6 text-center text-h3">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {contacts.map((contact, index) => <motion.div key={contact.email} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.3,
        delay: 0.9 + index * 0.1
      }} className="flex items-center gap-3 bg-white p-4 rounded-md shadow-sm">
            <Mail className="h-5 w-5 text-brand-blue" />
            <div>
              <span className="font-medium">{contact.name}, {contact.title}:</span>{" "}
              <a href={`mailto:${contact.email}`} className="text-brand-blue hover:underline">
                {contact.email}
              </a>
            </div>
          </motion.div>)}
      </div>
    </motion.div>;
};
export default ContactInformation;