import * as React from 'react'

export default function Fathom() {
  React.useEffect(() => {
    const tracker = window.document.createElement('script')
    const firstScript = window.document.getElementsByTagName('script')[0]
    tracker.defer = true
    tracker.setAttribute('site', process.env.SPECFM_FATHOM_SITE_ID)
    tracker.setAttribute('spa', 'auto')
    tracker.setAttribute('excluded-domains', 'localhost,now.sh')
    tracker.setAttribute('included-domains', 'spec.fm')
    tracker.src = process.env.SPECFM_FATHOM_CUSTOM_URL
    firstScript.parentNode.insertBefore(tracker, firstScript)
  }, [])

  return null
}
