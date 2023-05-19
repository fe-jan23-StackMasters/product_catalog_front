import { ContactsCard } from '../ContactsCard/ContactsCard';
import './contacts.scss';

export const Contacts = () => (
  <>
    <h2 className='contacts__title'>Our Team</h2>

    <div className='contacts'>
      <ContactsCard
        img={'https://avatars.githubusercontent.com/u/121887457?v=4'}
        name={'Kirill Vypirovskyi'}
        github={'https://github.com/kirill-vypirovskyi'}
        linkedin={'https://www.linkedin.com/in/kirill-vypirovskyi/'}
        email={'kirill.vypirovskyi@gmail.com'}
        techLead={true}
      />
      <ContactsCard
        img={'https://avatars.githubusercontent.com/u/120708868?v=4'}
        name={'Serhii Zelinskyi'}
        github={'https://github.com/Zelinskyi-Serhii'}
        linkedin={'https://www.linkedin.com/in/serhii-zelinskyi-dev/'}
        email={'zelinskyi.serh@gmail.com'}
        techLead={false}
      />
      <ContactsCard
        img={'https://avatars.githubusercontent.com/u/59706893?v=4'}
        name={'Strilets Maksym'}
        github={'https://github.com/mstrilec'}
        linkedin={'https://www.linkedin.com/in/maksym-strilets-671b23273/'}
        email={'m.strilets.work@gmail.com'}
        techLead={false}
      />
      <ContactsCard
        img={'https://shorturl.at/hEOX3'}
        name={'Vadim Bratus'}
        github={'https://github.com/vadosik15'}
        linkedin={'https://www.linkedin.com/in/vadim-bratus-261a34274/'}
        email={'vadim.bratus@gmail.com'}
        techLead={false}
      />
      <ContactsCard
        img={'https://avatars.githubusercontent.com/u/119732066?v=4'}
        name={'Vladyslav Kanaiev'}
        github={'https://github.com/Nordexz'}
        linkedin={'https://www.linkedin.com/in/vladyslav-kanaiev/'}
        email={'kanaiev.vladyslav@gmail.com'}
        techLead={false}
      />
      <ContactsCard
        img={'https://avatars.githubusercontent.com/u/122547797?v=4'}
        name={'Bozhena Bodnar'}
        github={'https://github.com/BozhenaBodnar'}
        linkedin={'https://www.linkedin.com/in/bozhena-bodnar-880959273/'}
        email={'bbozhena.work@gmail.com'}
        techLead={false}
      />
    </div>
  </>
);
