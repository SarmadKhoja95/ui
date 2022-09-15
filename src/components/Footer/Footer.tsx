import * as React from 'react'
import { Container } from '../Container/Container'
import {
  LanguageDropdownI18N,
  LanguageDropdownProps
  // LanguageDropdown
} from '../LanguageDropdown/LanguageDropdown'
import { Locale } from '../Language/Language'
import './Footer.css'
import { Divider } from 'semantic-ui-react'

export type LinksI18N = {
  home: React.ReactNode
  privacy: React.ReactNode
  terms: React.ReactNode
  content: React.ReactNode
  ethics: React.ReactNode
}

export type FooterI18N = {
  dropdown: LanguageDropdownI18N
  links: LinksI18N
}

export type FooterProps = {
  locale?: Locale
  locales?: Locale[]
  i18n?: FooterI18N
  onChange?: LanguageDropdownProps['onChange']
  isFullscreen?: boolean
  className?: string
  isFullWidth?: boolean
}

export class Footer extends React.PureComponent<FooterProps> {
  static defaultProps: Partial<FooterProps> = {
    i18n: {
      dropdown: {
        en: 'English',
        es: 'Spanish',
        fr: 'French',
        ja: 'Japanese',
        zh: 'Chinese',
        ko: 'Korean'
      },
      links: {
        home: 'Home',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        content: 'Content Policy',
        ethics: 'Code of Ethics'
      }
    }
  }

  render(): JSX.Element {
    const {
      // locale,
      // locales,
      // onChange,
      i18n,
      isFullscreen,
      className,
      isFullWidth
    } = this.props

    let classes = 'dcl footer'
    if (isFullscreen) {
      classes += ' fullscreen'
    }
    if (className) {
      classes += ' ' + className
    }
    if (isFullWidth) {
      classes += ' full-width'
    }

    return (
      <Container className={classes}>
        <div className="main-footer">
          {/* <LanguageDropdown
            locale={locale}
            locales={locales}
            onChange={onChange}
            upward
            direction="right"
            i18n={i18n.dropdown}
          /> */}

          <div className="links">
            <p className="help-text">Need help?</p>
            <a href="http://www.manialands.com/privacy">{i18n.links.privacy}</a>
            <a href="http://www.manialands.com/terms">{i18n.links.terms}</a>
            <a href="http://www.manialands.com/content">{i18n.links.content}</a>
            <a href="http://www.manialands.com/ethics">{i18n.links.ethics}</a>
          </div>
          <div className="social-links">
            <p className="follow-text">Follow us</p>
            <a href="https://twitter.com/manialands">
              <i className="social-icon twitter" />
            </a>
            <a href="https://dribbble.com">
              <i className="social-icon dribble" />
            </a>
            <a href="https://github.com/manialands">
              <i className="social-icon github" />
            </a>
          </div>
        </div>
        <Divider />
        <div className="secondary-footer">
          <div className="copyright">© {new Date().getFullYear()} Playmax</div>
        </div>
      </Container>
    )
  }
}
