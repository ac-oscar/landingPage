import React, { useCallback, useState } from 'react'
import { Button } from '../UI/Button';
import * as classnames from 'classnames'
import { LINKS } from '../../utils'

let FALSE = false;

export default function Nav() {
  let [isExpanded, setIsExpanded] = useState(FALSE),
      containerClassname          = classnames('container flex flex-wrap justify-between md:justify-between items-center mx-auto'),
      toggleMenuClassname         = classnames('inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden'),
      itemsListClassname          = classnames('flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent'),
      linkClassname               = classnames('block py-2 pr-4 pl-3 font-semibold rounded md:border-0 md:p-0 text-2xl'),
      contentClassname            = classnames('w-full md:block md:w-auto', {
        'hidden' : !isExpanded
      }),
      handleToggleClick           = useCallback(() => {
        setIsExpanded(state => !state);
      }, []),
      hideMenuOnMobile            = useCallback(() => {
        setIsExpanded(FALSE);
      }, []);

  return (
    <div className="sticky top-0 z-10 bg-black">
        <nav className="p-5">
          <div className={containerClassname}>
            <Button as="a" attributes={{ href: 'https://api.whatsapp.com/send?phone=57123456789', target: '_blank' }} text="Comunicate con nosotros!!" title="Comunicate con nosotros!!" />
            <Button attributes={{ dataCollapseToggle: 'navbar-default', type: 'button', ariaControls: 'navbar-default', ariaExpanded: 'false' }} onClick={handleToggleClick} className={toggleMenuClassname} overrideClassName>
              <span className="sr-only">Abrir Menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </Button>
            <div className={contentClassname} id="navbar-default">
              <ul className={itemsListClassname}>
                {
                  LINKS.map(({ title, url }, idx) => {
                    return (
                      <li key={idx}>
                        <a href={url} onClick={hideMenuOnMobile} className={linkClassname}>{title}</a>
                      </li>
                    )
                  }) 
                }
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}