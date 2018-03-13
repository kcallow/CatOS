<!DOCTYPE html>
<html lang="en" manifest="/manifest.appcache">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Download</title>
    <link rel="alternate" title="PouchDB, the JavaScript Database that Syncs!" type="application/rss+xml" href="/feed.xml">
    <link rel="stylesheet" href="/static/css/pouchdb.css" />
    <meta name="theme-color" content="#6ccb99">
    <meta name="msapplication-TileColor" content="#6ccb99">
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-42479701-1']);
      _gaq.push(['_trackPageview']);

      (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
    <link href='//fonts.googleapis.com/css?family=Lato:400,700|Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
  </head>

  <body data-spy="scroll" data-target="#sidebar">

    <header role="banner">

      <a
        href="https://github.com/pouchdb/pouchdb"
        target="_blank"
        rel="noopener noreferrer"
      >
         <div class="ribbon">GitHub</div>
      </a>

      <div class="container">

        <a class="logo" href="/">
          <div class="logo-img"></div>
          <span class='sr-only'>PouchDB</span>
        </a>

        <ul class='nav nav-header nav-pills' role="navigation">
          <li>
            <a class='btn btn-link btn-lg' href="/blog/">Blog</a>
          </li>
          <li>
            <a class='btn btn-link btn-lg' href="/guides/">Guides</a>
          </li>
          <li>
            <a class='btn btn-link btn-lg' href="/api.html">API</a>
          </li>
          <li>
            <a class='btn btn-link btn-lg' href="/learn.html">Learn</a>
          </li>
          <li>
            <a class='btn btn-primary btn-lg' href="/download.html">Download <strong>v6.4.3</strong></a>
          </li>
        </ul>

      </div>

    </header>
    
      <div class="band band-inverse">

        <div class="container">

          <h1 class="margin-bottom-none">Download</h1>
          
            <span class="h1 margin-bottom-none">
              
<a
  data-toggle="tooltip"
  data-placement="top"
  title="Edit this on Github"
  class="icon-edit"
  href="https://github.com/pouchdb/pouchdb/edit/master/docs/download.md"
  target="_blank"
></a>

            </span>
          
          

        </div>

      </div>
    

    <div role="main">
      <article class="band">
  <div class="container">
    <div class="row">
        <div id="sidebar" class="col-sm-3 nav-sidebar-wrapper">
          <ul class="nav nav-silent nav-sidebar" role="navigation">
            <li >
    <a href="/learn.html">About</a>
</li>

<li  class="active" >
    <a href="/download.html">Download</a>
</li>

<li >
    <a href="/users.html">Who's using PouchDB?</a>
</li>

<li >
    <a href="/getting-started.html">Get Started Guide</a>
</li>

<li >
    <a href="/api.html">API</a>
</li>

<li >
    <a href="/adapters.html">Adapters</a>
</li>

<li >
    <a href="/custom.html">Custom Builds</a>
</li>

<li >
    <a href="/external.html">Plugins</a>
</li>

<li >
    <a href="/faq.html">FAQ</a>
</li>

<li >
    <a href="/errors.html">Common Errors</a>
</li>


          </ul>
        </div>

        <div class="col-sm-9" role="main">
          <div class='h3'><div class='anchor-id' id='file'></div><a class='anchor' href='#file' name='file'>Quick Start</a></div>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//cdn.jsdelivr.net/npm/pouchdb@6.4.3/dist/pouchdb.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script&gt;</span>
  <span class="kd">var</span> <span class="nx">db</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PouchDB</span><span class="p">(</span><span class="s1">'my_database'</span><span class="p">);</span>
<span class="nt">&lt;/script&gt;</span></code></pre></figure>

<p>PouchDB can also be directly downloaded:</p>

<ul>
<li><a href="https://github.com/pouchdb/pouchdb/releases/download/6.4.3/pouchdb-6.4.3.min.js">pouchdb-6.4.3.min.js</a> (compressed for production)</li>
<li><a href="https://github.com/pouchdb/pouchdb/releases/download/6.4.3/pouchdb-6.4.3.js">pouchdb-6.4.3.js</a> (uncompressed for debugging)</li>
</ul>

<div class='h3'><div class='anchor-id' id='npm'></div><a class='anchor' href='#npm' name='npm'>npm</a></div>

<p>PouchDB can be installed through <a href="http://npmjs.com">npm</a>:</p>

<figure class="highlight"><pre><code class="language-bash" data-lang="bash">npm install <span class="nt">--save</span> pouchdb</code></pre></figure>

<p>After installing, call <code>require()</code> to use it:</p>

<figure class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="kd">var</span> <span class="nx">PouchDB</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'pouchdb'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">db</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PouchDB</span><span class="p">(</span><span class="s1">'my_database'</span><span class="p">);</span></code></pre></figure>

<p>PouchDB can be used either in Node or in the browser. A bundler such as <a href="http://browserify.org/">Browserify</a>, <a href="https://webpack.github.io/">Webpack</a>, or <a href="http://rollupjs.org/">Rollup</a> is needed for browser usage.</p>

<h4>Browser only</h4>

<p>If you&#39;re only using PouchDB in the browser, you can use <code>pouchdb-browser</code> for
faster install times:</p>

<figure class="highlight"><pre><code class="language-bash" data-lang="bash">npm install <span class="nt">--save</span> pouchdb-browser</code></pre></figure>

<figure class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="kd">var</span> <span class="nx">PouchDB</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'pouchdb-browser'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">db</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PouchDB</span><span class="p">(</span><span class="s1">'my_database'</span><span class="p">);</span></code></pre></figure>

<p>See <a href="http://pouchdb.com/custom.html">custom builds</a> for more options.</p>

<div class='h3'><div class='anchor-id' id='cdn'></div><a class='anchor' href='#cdn' name='cdn'>CDNs</a></div>

<p>PouchDB is hosted at these CDNs:</p>

<ul>
<li><a href="https://cdnjs.com/libraries/pouchdb">cdnjs</a></li>
<li><a href="http://www.jsdelivr.com/#!pouchdb">jsdelivr</a></li>
<li><a href="https://unpkg.com/pouchdb@6.4.3/dist/">unpkg</a></li>
</ul>

<div class='h3'><div class='anchor-id' id='bower'></div><a class='anchor' href='#bower' name='bower'>Bower</a></div>

<p>PouchDB can be installed through <a href="http://bower.io">Bower</a>.</p>

<figure class="highlight"><pre><code class="language-bash" data-lang="bash">bower install <span class="nt">--save</span> pouchdb</code></pre></figure>

<div class='h3'><div class='anchor-id' id='past-releases'></div><a class='anchor' href='#past-releases' name='past-releases'>Past releases</a></div>

<p>For past releases and changelog, check out the <a href="https://github.com/pouchdb/pouchdb/releases">Github releases page</a>.</p>

<div class='h3'><div class='anchor-id' id='plugins'></div><a class='anchor' href='#plugins' name='plugins'>Plugins</a></div>

<p>For third-party plugins, see the <a href="/external.html">plugins page</a>.</p>

<div class='h3'><div class='anchor-id' id='custom'></div><a class='anchor' href='#custom' name='custom'>Custom builds</a></div>

<p>For custom builds and first-party plugins, see the <a href="http://pouchdb.com/custom.html">custom builds</a> page.</p>

        <div>

    </div>

  </div>
</article>

    </div>

    <div class="band">

      <div class="container">

        <div class="row">

          <div class="col-xs-4 col-md-offset-0 col-md-2">
            <a
              href="https://twitter.com/pouchdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="icon"
                src="/static/img/friends/twitter.svg"
                alt="PouchDB's Twitter"
              />
            </a>
          </div>

          <div class="col-xs-4 col-md-2">
            <a
              href="https://github.com/rvagg/node-levelup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="icon"
                src="/static/img/friends/leveldb.svg"
                alt="Node Levelup"
              />
            </a>
          </div>

          <div class="col-xs-4 col-md-2">
            <a
              href="https://github.com/pouchdb/pouchdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="icon"
                src="/static/img/friends/github.svg"
                alt="PouchDB's Github Repo"
              />
            </a>
          </div>

          <div class="col-xs-4 col-md-offset-0 col-md-2">
            <a
              href="https://travis-ci.org/pouchdb/pouchdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="icon"
                src="/static/img/friends/travis.svg"
                alt="PouchDB's Travis CI"
              />
            </a>
          </div>

          <div class="col-xs-4 col-md-2">
            <a
              href="http://couchdb.apache.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="icon"
                src="/static/img/friends/couchdb.svg"
                alt="CouchDB"
              >
            </a>
          </div>
          <div class="col-xs-4 col-md-2">
            <a
              href="https://saucelabs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="icon"
                src="/static/img/friends/saucelabs.svg"
                alt="Saucelabs"
              />
            </a>
          </div>

        </div>

      </div>

    </div>

    <footer class="band band-inverse">

      <div class="container">

        <div class="row">

          <div class="col-sm-3">
            <h3 class="nav-head">Learn</h3>
            <ul class="nav nav-silent">
              <li><a href="/getting-started.html">Getting Started</a></li>
              <li><a href="/api.html">API Guide</a></li>
              <li><a href="https://github.com/pouchdb/pouchdb/wiki">Wiki</a></li>
            </ul>
          </div>

          <div class="col-sm-3">
            <h3 class="nav-head">Discuss</h3>
            <ul class="nav nav-silent">
              <li><a href="https://groups.google.com/forum/#!forum/pouchdb">Mailing List</a></li>
              <li><a href="irc://freenode.net/#pouchdb">IRC</a></li>
              <li><a href="http://twitter.com/pouchdb">Twitter</a></li>
              <li><a href="http://stackoverflow.com/questions/tagged/pouchdb">StackOverflow</a></li>
            </ul>
          </div>

          <div class="col-sm-3">
            <h3 class="nav-head">Contribute</h3>
            <ul class="nav nav-silent">
              <li><a href="https://github.com/pouchdb/pouchdb/blob/master/CONTRIBUTING.md">Contributing</a></li>
              <li><a href="https://github.com/pouchdb/pouchdb">Source</a></li>
              <li><a href="https://github.com/pouchdb/pouchdb/issues">Issues</a></li>
              <li><a href="https://github.com/pouchdb/pouchdb/blob/master/LICENSE">Apache License</a></li>
            </ul>
          </div>

        </div>

      </div>

    </footer>
    <script type="text/javascript" src="//code.jquery.com/jquery.min.js"></script>
    <script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/static/js/code.min.js"></script>
    <script type="text/javascript" src="/static/js/stickyfill.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/pouchdb/latest/pouchdb.min.js"></script>
    <script type="text/javascript">
      var $navSidebarWrapper = $('.nav-sidebar-wrapper');
      if ($navSidebarWrapper.length) {
        $navSidebarWrapper.Stickyfill();
      }
      $('[data-toggle="tooltip"]').tooltip();
      function onCached(e) {
        if (applicationCache.status === 1) {
          giveIntro();
        }
      }

      function giveIntro() {
        console.log('%c\n..............................................................................\n.?I...........~+: ............................................................\n.???.........++++.............................................................\n:????+......+++++.............................................................\n.??????+++++++++:.................................H...........D..B............\n...????++++++++...................................H...........D..B............\n...=????++++++.......PPPPP...OOOO...U....U...CCCC.HHHHH...DDDDD..BBBBB........\n...?????+++++++......P...:P.OO...O..U....U..C.....H...H..D....D..B....B.......\n..???????+++++++ ....P. ..P.O....O..U....U.CC.....H...H..D....D..B....B.......\n..?????????????......P...:P.OO...O..U....U..C.....H...H..D....D..B....B.......\n...I??????????~......PPPPP...OOOO...=UUUUU...CCCC.H...H...DDDDD..BBBBB........\n....?????????~.......P.... ...................................................\n.....???????+........P........................................................\n......??????..................................................................\n..............................................................................\n..............................................................................\n..............................................................................', 'color: #4ec084');
        console.log('%c\nPouchDB itself is hosted at PouchDB.com!\nTo get started, try typing:\nvar db = new PouchDB(\'mydb\');', 'color: #4ec084');
      }
      function offerToReload() {
        $('.js-update-notification')
          .removeClass('btn-update-hidden')
          .on('click', function(){
            window.location.reload();
          });
      }
      if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/serviceWorker.js')
          .then(function (registration) {
            registration.addEventListener('updatefound', function () {
              var newWorker = registration.installing;
              registration.installing.addEventListener('statechange', function () {
                if (newWorker.state == 'installed' && navigator.serviceWorker.controller) {
                  offerToReload();
                }
              });
            });
            giveIntro();
          })
          .catch(function(error) {
            console.log('ServiceWorker registration failed: ', error);
          });
      } else if (window.applicationCache) {
        applicationCache.addEventListener('cached', onCached, false);
        applicationCache.addEventListener('noupdate', giveIntro, false);
        applicationCache.addEventListener('updateready', offerToReload, false);
      }
    </script>
    <button type="button" class="js-update-notification btn btn-primary btn-update btn-update-hidden">
      Content updated, reload now? ↻
    </button>
  </body>
</html>
