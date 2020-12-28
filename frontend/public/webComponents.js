/*
class htmlPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'})

    }
    set htmlContents(htmlCode){
        this.root.innerHTML = '<style>#content{margin: 0}</style>' + htmlCode;
    }
}

customElements.define('html-page', htmlPage);
*/

/*
const htmlCode = `<html lang="en"><head> <title>iFrame Wikipedia</title><link rel="stylesheet" href="https://wikipedia.org/w/load.php?lang=de&amp;modules=ext.cite.styles%7Cext.flaggedRevs.basic%2Cicons%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.toc.styles%7Cmediawiki.widgets.styles%7Coojs-ui-core.icons%2Cstyles%7Coojs-ui.styles.indicators%7Cskins.vector.styles.legacy%7Cwikibase.client.init&amp;only=styles&amp;skin=vector"><link rel="stylesheet" href="https://wikipedia.org/w/load.php?lang=de&amp;modules=site.styles&amp;only=styles&amp;skin=vector"></head> <body><div id="content" class="mw-body" role="main">
\t<a id="top" href="#"></a>
\t<div id="siteNotice" class="mw-body-content"><!-- CentralNotice --></div>
\t<div class="mw-indicators mw-body-content">
\t</div>
\t<h1 id="firstHeading" class="firstHeading" lang="de">cURL</h1>
\t<div id="bodyContent" class="mw-body-content">
\t\t<div id="siteSub" class="noprint">aus Wikipedia, der freien Enzyklopädie</div>
\t\t<div id="contentSub"></div>
\t\t<div id="contentSub2"></div>
\t\t
\t\t<div id="jump-to-nav"></div>
\t\t<a class="mw-jump-link" href="#">Zur Navigation springen</a>
\t\t<a class="mw-jump-link" href="#">Zur Suche springen</a>
\t\t<div id="mw-content-text" lang="de" dir="ltr" class="mw-content-ltr"><div class="mw-parser-output"><div class="hintergrundfarbe1 rahmenfarbe1 navigation-not-searchable noprint" style="border-bottom-style: solid; border-bottom-width: 1px; font-size:95%; margin-bottom:1em; padding: 0.25em; overflow: hidden;" id="Vorlage_Dieser_Artikel"><div class="noviewer" style="display: table-cell; padding-bottom: 0.2em; padding-left: 0.25em; padding-right: 1em; padding-top: 0.2em; vertical-align: middle;" id="bksicon" aria-hidden="true" role="presentation"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Disambig-dark.svg/25px-Disambig-dark.svg.png" decoding="async" width="25" height="19" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Disambig-dark.svg/38px-Disambig-dark.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Disambig-dark.svg/50px-Disambig-dark.svg.png 2x" data-file-width="444" data-file-height="340"></div>
<div style="display: table-cell; vertical-align: middle; width: 100%;">
<div role="navigation">
Dieser Artikel behandelt die Software. Zu anderen Bedeutungen siehe <a href="#" class="mw-disambig" title="Curl" onclick="() => console.log('clicked!');">Curl</a> (Begriffsklärung).</div>
</div></div>
<table class="float-right infobox toccolours toptextcells" style="border-spacing:5px; font-size:90%; text-align:left; width:21em;">

<tbody><tr>
<th colspan="2" class="hintergrundfarbe6" style="font-size:105%; text-align:center;">cURL
<p class="mw-empty-elt">
</p>
</th></tr>
<tr>
<td colspan="2" style="text-align:center;"><a href="#" class="image" onclick="() => console.log('clicked!');"><img alt="Curl-logo.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Curl-logo.svg/250px-Curl-logo.svg.png" decoding="async" width="250" height="75" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Curl-logo.svg/375px-Curl-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Curl-logo.svg/500px-Curl-logo.svg.png 2x" data-file-width="429" data-file-height="129"></a>
</td></tr>
<tr>
<td colspan="2" style="text-align:center;"><a href="#" class="image" onclick="() => console.log('clicked!');"><img alt="Screenshot of cURL command line interface.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Screenshot_of_cURL_command_line_interface.png/300px-Screenshot_of_cURL_command_line_interface.png" decoding="async" width="300" height="31" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Screenshot_of_cURL_command_line_interface.png/450px-Screenshot_of_cURL_command_line_interface.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Screenshot_of_cURL_command_line_interface.png/600px-Screenshot_of_cURL_command_line_interface.png 2x" data-file-width="746" data-file-height="77"></a><br> Beispielausgabe von <code>curl -O</code>
</td></tr>
<tr>
<th colspan="2" class="hintergrundfarbe5" style="font-size:105%; text-align:center;">Basisdaten
<p class="mw-empty-elt">
</p>
</th></tr>
<tr>
<td><b><a href="#" title="Maintainer" onclick="() => console.log('clicked!');">Maintainer</a></b>
</td>
<td><span class="wikidata-content">Daniel Stenberg<sup id="cite_ref-_4b9ca4c15048b236_1-0" class="reference"><a href="#">[1]</a></sup></span>
</td></tr>
<tr>
<td><b><a href="#" title="Softwareentwickler" onclick="() => console.log('clicked!');">Entwickler</a></b>
</td>
<td>Daniel Stenberg u.&nbsp;v.&nbsp;a.
</td></tr>
<tr>
<td><b>Erscheinungsjahr</b>
</td>
<td><span class="wikidata-content">1997<sup id="cite_ref-_e117819510fe61a6_2-0" class="reference"><a href="#">[2]</a></sup></span>
</td></tr>
<tr>
<td><b>Aktuelle&nbsp;<a href="#" title="Version (Software)" onclick="() => console.log('clicked!');">Version</a></b>
</td>
<td><span class="wikidata-content">7.73.0<sup id="cite_ref-_7280959ae98245f8_3-0" class="reference"><a href="#">[3]</a></sup></span> <br> (<span class="wikidata-content">14. Oktober 2020</span>)
</td></tr>
<tr>
<td><b><a href="#" title="Betriebssystem" onclick="() => console.log('clicked!');">Betriebssystem</a></b>
</td>
<td>Multiplattform
</td></tr>
<tr>
<td><b><a href="#" title="Programmiersprache" onclick="() => console.log('clicked!');">Programmiersprache</a></b>
</td>
<td><a href="#" title="C (Programmiersprache)" onclick="() => console.log('clicked!');">C</a>
</td></tr>
<tr>
<td><b>Kategorie</b>
</td>
<td>Remote Access
</td></tr>
<tr>
<td><b>Lizenz</b>
</td>
<td><a href="#" title="MIT-Lizenz" onclick="() => console.log('clicked!');">MIT-Lizenz</a>
</td></tr>
<tr>
<td><b><a href="#" title="Lokalisierung (Softwareentwicklung)" onclick="() => console.log('clicked!');">deutschsprachig</a></b>
</td>
<td>nein
</td></tr>
<tr>
<td class="hintergrundfarbe5" colspan="2" style="text-align:center;"><a rel="nofollow" class="external text" href="#">curl.se</a>
</td></tr></tbody></table>
<p><b>cURL</b> (ausgeschrieben <b>Client for URLs</b> oder <b>Curl URL Request Library</b>, gesprochen: [ˈkər(-ə)l]<sup id="cite_ref-4" class="reference"><a href="#">[4]</a></sup><sup id="cite_ref-5" class="reference"><a href="#">[5]</a></sup>) ist eine <a href="#" title="Programmbibliothek" onclick="() => console.log('clicked!');">Programmbibliothek</a> und ein <a href="#" title="Kommandozeile" onclick="() => console.log('clicked!');">Kommandozeilen</a>-Programm zum Übertragen von <a href="#" title="Datei" onclick="() => console.log('clicked!');">Dateien</a> in <a href="#" title="Rechnernetz" onclick="() => console.log('clicked!');">Rechnernetzen</a>. cURL steht unter der offenen <a href="#" title="MIT-Lizenz" onclick="() => console.log('clicked!');">MIT-Lizenz</a> und ist u.&nbsp;a. auf folgende Betriebssysteme portiert worden: <a href="#" title="Solaris (Betriebssystem)" onclick="() => console.log('clicked!');">Solaris</a>, <a href="#" title="NetBSD" onclick="() => console.log('clicked!');">NetBSD</a>, <a href="#" title="FreeBSD" onclick="() => console.log('clicked!');">FreeBSD</a>, <a href="#" title="OpenBSD" onclick="() => console.log('clicked!');">OpenBSD</a>, <a href="#" title="Darwin (Betriebssystem)" onclick="() => console.log('clicked!');">Darwin</a> und <a href="#" title="MacOS" onclick="() => console.log('clicked!');">macOS</a>, <a href="#" title="HP-UX" onclick="() => console.log('clicked!');">HPUX</a>, <a href="#" title="IRIX" onclick="() => console.log('clicked!');">IRIX</a>, <a href="#" title="AIX" onclick="() => console.log('clicked!');">AIX</a>, <a href="#" title="Tru64 UNIX" onclick="() => console.log('clicked!');">Tru64</a>, <a href="#" title="Linux" onclick="() => console.log('clicked!');">Linux</a>, <a href="#" title="UnixWare" onclick="() => console.log('clicked!');">UnixWare</a>, <a href="#" title="GNU Hurd" onclick="() => console.log('clicked!');">HURD</a>, <a href="#" title="Microsoft Windows" onclick="() => console.log('clicked!');">Windows</a>, <a href="#" title="AmigaOS" onclick="() => console.log('clicked!');">AmigaOS</a>, <a href="#" title="OS/2" onclick="() => console.log('clicked!');">OS/2</a>, <a href="#" title="BeOS" onclick="() => console.log('clicked!');">BeOS</a>, <a href="#" title="Ultrix" onclick="() => console.log('clicked!');">Ultrix</a>, <a href="#" title="QNX" onclick="() => console.log('clicked!');">QNX</a>, <a href="#" title="Virtual Memory System" onclick="() => console.log('clicked!');">OpenVMS</a>, <a href="#" title="RISC OS" onclick="() => console.log('clicked!');">RISC OS</a>, <a href="#" class="mw-redirect" title="Novell NetWare" onclick="() => console.log('clicked!');">Novell Netware</a> und <a href="#" class="mw-redirect" title="DOS" onclick="() => console.log('clicked!');">DOS</a>. Die zugehörige Programmbibliothek <i>libcurl</i> wird von zahlreichen Programmen und Programmiersprachen verwendet.
</p>
<div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox" style="display:none"><div class="toctitle" lang="de" dir="ltr"><h2 id="mw-toc-heading">Inhaltsverzeichnis</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#"><span class="tocnumber">1</span> <span class="toctext">Geschichte</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#"><span class="tocnumber">2</span> <span class="toctext">Funktionsumfang</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#"><span class="tocnumber">3</span> <span class="toctext">Implementierungen</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#"><span class="tocnumber">4</span> <span class="toctext">Trivia</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#"><span class="tocnumber">5</span> <span class="toctext">Weblinks</span></a></li>
<li class="toclevel-1 tocsection-6"><a href="#"><span class="tocnumber">6</span> <span class="toctext">Einzelnachweise</span></a></li>
</ul>
</div>

<h2><span class="mw-headline" id="Geschichte">Geschichte</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="#" class="mw-editsection-visualeditor" title="Abschnitt bearbeiten: Geschichte">Bearbeiten</a><span class="mw-editsection-divider"> | </span><a href="#" title="Abschnitt bearbeiten: Geschichte">Quelltext bearbeiten</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>Daniel Stenberg, der <a href="#" title="Softwareentwickler" onclick="() => console.log('clicked!');">Programmierer</a> von cURL, begann 1997 ein Programm zu schreiben, das <a href="#" title="Internet Relay Chat" onclick="() => console.log('clicked!');">IRC</a>-Teilnehmern Daten über Wechselkurse zur Verfügung stellen sollte, welche von Webseiten abgerufen werden mussten. Er setzte dabei auf das vorhandene <a href="#" title="Open Source" onclick="() => console.log('clicked!');">Open-Source</a>-Tool <i>httpget</i>. Nach einer Erweiterung um andere Protokolle wurde das Programm am 20.&nbsp;März 1998 als <i>cURL 4</i> erstmals veröffentlicht. Ursprünglich stand der Name für "see URL" und wurde erst später von Stenberg nach einem besseren Vorschlag zum aktuellen Backronym umgedeutet.<sup id="cite_ref-6" class="reference"><a href="#">[6]</a></sup>
</p>
<h2><span class="mw-headline" id="Funktionsumfang">Funktionsumfang</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="#" class="mw-editsection-visualeditor" title="Abschnitt bearbeiten: Funktionsumfang">Bearbeiten</a><span class="mw-editsection-divider"> | </span><a href="#" title="Abschnitt bearbeiten: Funktionsumfang">Quelltext bearbeiten</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>Wie der ausgeschriebene Name „<a href="#" title="Client" onclick="() => console.log('clicked!');">Client</a> for <a href="#" title="Uniform Resource Locator" onclick="() => console.log('clicked!');">URLs</a>“ andeutet, ist es ein <a href="#" title="Kommandozeile" onclick="() => console.log('clicked!');">Kommandozeilen</a>-Werkzeug zum Herunter- oder Hochladen von Dateien über eine Internetadresse, auch <a href="#" title="Hypertext Transfer Protocol" onclick="() => console.log('clicked!');">POST</a>-Übertragungen sind möglich. Zu den unterstützten Protokollen gehören Stand April 2020: <a href="#" title="DICT (Protokoll)" onclick="() => console.log('clicked!');">DICT</a>, FILE, <a href="#" title="File Transfer Protocol" onclick="() => console.log('clicked!');">FTP</a>, <a href="#" title="FTP über SSL" onclick="() => console.log('clicked!');">FTPS</a>, <a href="#" title="Gopher" onclick="() => console.log('clicked!');">Gopher</a>, <a href="#" title="Hypertext Transfer Protocol" onclick="() => console.log('clicked!');">HTTP</a>, <a href="#" class="mw-redirect" title="HTTPS" onclick="() => console.log('clicked!');">HTTPS</a>, <a href="#" class="mw-redirect" title="IMAP" onclick="() => console.log('clicked!');">IMAP</a>, <a href="#" class="mw-redirect" title="IMAP" onclick="() => console.log('clicked!');">IMAPS</a>, <a href="#" title="Lightweight Directory Access Protocol" onclick="() => console.log('clicked!');">LDAP</a>, <a href="#" title="Lightweight Directory Access Protocol" onclick="() => console.log('clicked!');">LDAPS</a>, <a href="#" title="Post Office Protocol" onclick="() => console.log('clicked!');">POP3</a>, <a href="#" title="POP3S" onclick="() => console.log('clicked!');">POP3S</a>, <a href="#" title="Real Time Messaging Protocol" onclick="() => console.log('clicked!');">RTMP</a>, <a href="#" title="Real-Time Streaming Protocol" onclick="() => console.log('clicked!');">RTSP</a>, <a href="#" class="mw-disambig" title="SCP" onclick="() => console.log('clicked!');">SCP</a>, <a href="#" class="mw-redirect" title="S/FTP" onclick="() => console.log('clicked!');">SFTP</a>, <a href="#" title="Samba (Software)" onclick="() => console.log('clicked!');">SMB</a>, <a href="#" title="Samba (Software)" onclick="() => console.log('clicked!');">SMBS</a>, <a href="#" title="Simple Mail Transfer Protocol" onclick="() => console.log('clicked!');">SMTP</a>, <a href="#" title="SMTPS" onclick="() => console.log('clicked!');">SMTPS</a>, <a href="#" title="Telnet" onclick="() => console.log('clicked!');">Telnet</a> und TFTP.<sup id="cite_ref-7" class="reference"><a href="#">[7]</a></sup>
</p>
<h2><span class="mw-headline" id="Implementierungen">Implementierungen</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="#" class="mw-editsection-visualeditor" title="Abschnitt bearbeiten: Implementierungen">Bearbeiten</a><span class="mw-editsection-divider"> | </span><a href="#" title="Abschnitt bearbeiten: Implementierungen">Quelltext bearbeiten</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>cURL ist schon länger in vielen <a href="#" title="Linux" onclick="() => console.log('clicked!');">Linux</a>-Distributionen enthalten. Seit dem April-2018-Update (1803) wurde cURL als Bordmittel in <a href="#" title="Microsoft Windows 10" onclick="() => console.log('clicked!');">Windows 10</a> aufgenommen und ist in einer Standardinstallation von Windows enthalten.<sup id="cite_ref-8" class="reference"><a href="#">[8]</a></sup> Diese ist jedoch im Funktionsumfang ein wenig abgespeckt.<sup id="cite_ref-9" class="reference"><a href="#">[9]</a></sup>
</p><p>Schätzungen zufolge ist <i>cURL</i> bzw. die zu Grunde liegende Bibliothek <i>libcurl</i> die meist installierte Software der Welt mit schätzungsweise 10 Milliarden Installationen.<sup id="cite_ref-10" class="reference"><a href="#">[10]</a></sup>
</p>
<h2><span class="mw-headline" id="Trivia">Trivia</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="#" class="mw-editsection-visualeditor" title="Abschnitt bearbeiten: Trivia">Bearbeiten</a><span class="mw-editsection-divider"> | </span><a href="#" title="Abschnitt bearbeiten: Trivia">Quelltext bearbeiten</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>Vor allem unter Programmierern und Administratoren hat sich das Verb „<i>curlen</i>“ bzw. im englischen „<i>to curl</i>“ etabliert was so viel bedeutet wie eine Website ohne Webbrowser anzuzeigen.
</p>
<h2><span class="mw-headline" id="Weblinks">Weblinks</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="#" class="mw-editsection-visualeditor" title="Abschnitt bearbeiten: Weblinks">Bearbeiten</a><span class="mw-editsection-divider"> | </span><a href="#" title="Abschnitt bearbeiten: Weblinks">Quelltext bearbeiten</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul><li><a rel="nofollow" class="external text" href="#">Offizielle Website von cURL</a></li>
<li><a rel="nofollow" class="external text" href="#">Release Notes</a></li></ul>
<h2><span class="mw-headline" id="Einzelnachweise">Einzelnachweise</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="#" class="mw-editsection-visualeditor" title="Abschnitt bearbeiten: Einzelnachweise">Bearbeiten</a><span class="mw-editsection-divider"> | </span><a href="#" title="Abschnitt bearbeiten: Einzelnachweise">Quelltext bearbeiten</a><span class="mw-editsection-bracket">]</span></span></h2>
<ol class="references">
<li id="cite_note-_4b9ca4c15048b236-1"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><a rel="nofollow" class="external text" href="#"><cite style="font-style:italic"><span lang="en">Polhemspriset 2017</span></cite>.</a> (abgerufen am 18.&nbsp;Oktober 2017).</span>
</li>
<li id="cite_note-_e117819510fe61a6-2"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><a rel="nofollow" class="external text" href="#"><cite style="font-style:italic">curl.haxx.se</cite>.</a></span>
</li>
<li id="cite_note-_7280959ae98245f8-3"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><a rel="nofollow" class="external text" href="#"><cite style="font-style:italic"><span lang="en">Release 7.73.0</span></cite>.</a> 14.&nbsp;Oktober 2020 (abgerufen am 9.&nbsp;November 2020).</span>
</li>
<li id="cite_note-4"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><span class="cite"><a rel="nofollow" class="external text" href="#"><i>curl – Frequently Asked Questions.</i></a><span class="Abrufdatum"> Abgerufen am 3.&nbsp;Juni 2019</span> (englisch): „We pronounce curl with an initial k sound. It rhymes with words like girl and earl. This is a short WAV file to help you: <a rel="nofollow" class="external free" href="#">https://media.merriam-webster.com/soundc11/c/curl0001.wav“</a></span><span style="display: none;" class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rfr_id=info%3Asid%2Fde.wikipedia.org%3ACURL&amp;rft.title=curl+%E2%80%93+Frequently+Asked+Questions&amp;rft.description=curl+%E2%80%93+Frequently+Asked+Questions&amp;rft.identifier=https%3A%2F%2Fcurl.haxx.se%2Fdocs%2Ffaq.html&amp;rft.language=en">&nbsp;</span></span>
</li>
<li id="cite_note-5"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><span class="cite"><a rel="nofollow" class="external text" href="#"><i>Definition of CURL.</i></a><span class="Abrufdatum"> Abgerufen am 3.&nbsp;Juni 2019</span> (englisch): „\\ ˈkər(-ə)l \\ <a rel="nofollow" class="external free" href="#">https://media.merriam-webster.com/audio/prons/en/us/mp3/c/curl0001.mp3“</a></span><span style="display: none;" class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rfr_id=info%3Asid%2Fde.wikipedia.org%3ACURL&amp;rft.title=Definition+of+CURL&amp;rft.description=Definition+of+CURL&amp;rft.identifier=https%3A%2F%2Fwww.merriam-webster.com%2Fdictionary%2Fcurl&amp;rft.language=en">&nbsp;</span></span>
</li>
<li id="cite_note-6"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><a rel="nofollow" class="external text" href="#">Daniel Stenberg: <i>curl, 17 years old today</i></a>. <i>daniel.haxx.se</i>, 20. März 2015</span>
</li>
<li id="cite_note-7"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><span class="cite"><a rel="nofollow" class="external text" href="#"><i>curl.</i></a><span class="Abrufdatum"> Abgerufen am 16.&nbsp;April 2020</span>.</span><span style="display: none;" class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rfr_id=info%3Asid%2Fde.wikipedia.org%3ACURL&amp;rft.title=curl&amp;rft.description=curl&amp;rft.identifier=https%3A%2F%2Fcurl.haxx.se%2F">&nbsp;</span></span>
</li>
<li id="cite_note-8"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><cite style="font-style:italic">What’s new for the Command Line in Windows 10 version 1803</cite>. In: <cite style="font-style:italic">Windows Command Line Tools For Developers</cite>. (<a rel="nofollow" class="external text" href="#">microsoft.com</a> [abgerufen am 10.&nbsp;Mai 2018]).<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rfr_id=info:sid/de.wikipedia.org:CURL&amp;rft.atitle=What%E2%80%99s+new+for+the+Command+Line+in+Windows+10+version+1803&amp;rft.btitle=Windows+Command+Line+Tools+For+Developers&amp;rft.genre=book" style="display:none">&nbsp;</span></span>
</li>
<li id="cite_note-9"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><span class="cite">Daniel Stenberg: <a rel="nofollow" class="external text" href="#"><i>Yesterday I wanted to show off copy-as-curl from Firefox and pasted one into a Windows 10 cmdline. Bzzzt. Total fail. Microsoft never enabled the --compressed option in curl, so basically half of all such attempts won't work! =-(.</i></a> In: <i>@bagder (Twitter).</i> 19.&nbsp;Dezember 2019,<span class="Abrufdatum"> abgerufen am 25.&nbsp;Dezember 2019</span> (englisch).</span><span style="display: none;" class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rfr_id=info%3Asid%2Fde.wikipedia.org%3ACURL&amp;rft.title=Yesterday+I+wanted+to+show+off+copy-as-curl+from+Firefox+and+pasted+one+into+a+Windows+10+cmdline.+Bzzzt.+Total+fail.+Microsoft+never+enabled+the+--compressed+option+in+curl%2C+so+basically+half+of+all+such+attempts+won%27t+work%21+%3D-%26%2340%3B&amp;rft.description=Yesterday+I+wanted+to+show+off+copy-as-curl+from+Firefox+and+pasted+one+into+a+Windows+10+cmdline.+Bzzzt.+Total+fail.+Microsoft+never+enabled+the+--compressed+option+in+curl%2C+so+basically+half+of+all+such+attempts+won%27t+work%21+%3D-%26%2340%3B&amp;rft.identifier=https%3A%2F%2Ftwitter.com%2Fbagder%2Fstatus%2F1207921081371299840&amp;rft.creator=Daniel+Stenberg&amp;rft.date=2019-12-19&amp;rft.language=en">&nbsp;</span></span>
</li>
<li id="cite_note-10"><span class="mw-cite-backlink"><a href="#">↑</a></span> <span class="reference-text"><span class="cite"><a rel="nofollow" class="external text" href="#"><i>The world’s biggest curl installations | daniel.haxx.se.</i></a><span class="Abrufdatum"> Abgerufen am 31.&nbsp;Januar 2020</span> (amerikanisches Englisch).</span><span style="display: none;" class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rfr_id=info%3Asid%2Fde.wikipedia.org%3ACURL&amp;rft.title=The+world%E2%80%99s+biggest+curl+installations+%7C+daniel.haxx.se&amp;rft.description=The+world%E2%80%99s+biggest+curl+installations+%7C+daniel.haxx.se&amp;rft.identifier=https%3A%2F%2Fdaniel.haxx.se%2Fblog%2F2018%2F09%2F17%2Fthe-worlds-biggest-curl-installations%2F&amp;rft.language=en-US">&nbsp;</span></span>
</li>
</ol>
<!-- 
NewPP limit report
Parsed by mw1273
Cached time: 20201113102326
Cache expiry: 2592000
Dynamic content: false
Complications: []
CPU time usage: 0.440 seconds
Real time usage: 0.512 seconds
Preprocessor visited node count: 1885/1000000
Post‐expand include size: 21579/2097152 bytes
Template argument size: 6945/2097152 bytes
Highest expansion depth: 16/40
Expensive parser function count: 2/500
Unstrip recursion depth: 0/20
Unstrip post‐expand size: 8428/5000000 bytes
Lua time usage: 0.303/10.000 seconds
Lua memory usage: 5.28 MB/50 MB
Number of Wikibase entities loaded: 1/400
-->
<!--
Transclusion expansion time report (%,ms,calls,template)
100.00%  475.876      1 -total
 57.70%  274.588      1 Vorlage:Infobox_Software
 35.04%  166.741      5 Vorlage:Internetquelle
  4.11%   19.547      5 Vorlage:Str_len
  3.63%   17.260      1 Vorlage:Literatur
  2.41%   11.484      2 Vorlage:&quot;
  1.93%    9.172      1 Vorlage:Dieser_Artikel
  1.20%    5.689      1 Vorlage:Hinweisbaustein
  0.85%    4.035      4 Vorlage:Str_trim
-->

<!-- Saved in parser cache with key dewiki:stable-pcache:idhash:474951-0!canonical and timestamp 20201113102326 and revision id 205212358. Serialized with PHP.
 -->
</div><noscript><img src="//de.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1" alt="" title="" width="1" height="1" style="border: none; position: absolute;"></noscript>
<div class="printfooter">Abgerufen von „<a dir="ltr" href="#">https://de.wikipedia.org/w/index.php?title=CURL&amp;oldid=205212358</a>“</div></div>
\t\t<div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="#" title="Wikipedia:Kategorien" onclick="() => console.log('clicked!');">Kategorien</a>: <ul><li><a href="#" title="Kategorie:Freie Dateitransfer-Software" onclick="() => console.log('clicked!');">Freie Dateitransfer-Software</a></li><li><a href="#" title="Kategorie:Download-Manager" onclick="() => console.log('clicked!');">Download-Manager</a></li><li><a href="#" title="Kategorie:FTP-Client" onclick="() => console.log('clicked!');">FTP-Client</a></li><li><a href="#" title="Kategorie:Linux-Software" onclick="() => console.log('clicked!');">Linux-Software</a></li><li><a href="#" title="Kategorie:MacOS-Betriebssystemkomponente" onclick="() => console.log('clicked!');">MacOS-Betriebssystemkomponente</a></li><li><a href="#" title="Kategorie:Unix-Software" onclick="() => console.log('clicked!');">Unix-Software</a></li><li><a href="#" title="Kategorie:BSD-Software" onclick="() => console.log('clicked!');">BSD-Software</a></li><li><a href="#" title="Kategorie:C-Bibliothek" onclick="() => console.log('clicked!');">C-Bibliothek</a></li></ul></div></div>
\t</div>
</div></body></html>`;
*/

/*
const container = document.querySelector('#wiki');
const el = document.createElement('html-page');
el.htmlContents = htmlCode;
container.appendChild(el);*/
