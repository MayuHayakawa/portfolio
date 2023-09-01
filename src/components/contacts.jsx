import { contacts } from "../constants/index";

const Contacts = () => {
  return (
    <section id="contacts">
      <div className="section-container">
        <h1 className="section-title mb-8">Contacts 📩</h1>
        <div className="flex justify-center gap-8">
          { contacts.map((contact) => {
            return (
              <div
              key={contact.label}
              className="flex flex-col"
            >
              <div className="text-5xl max-sm:text-3xl">
                <a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.icon}</a>
              </div>
              <div className="text-primary-500 text-sm max-sm:text-xs">{contact.label}</div>
            </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Contacts;