import React from 'react'
import { Link } from 'react-router-dom'

import styles from "../../styles/Footer.module.css"
import { ROUTES } from '../../utils/routes'

import logo from '../../images/logo.svg'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt='Stuff' />
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://github.com/Qahyfo'>
                    Qahyfo
                </a>
            </div>

            <div className={styles.socials}>
                <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>

                </a>
            </div>
        </section>
    )
}

export default Footer
