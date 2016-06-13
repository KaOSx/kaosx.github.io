(function() {
    var LIB_VERSION = 67;
    window.Transifex = window.Transifex || {};
    window.Transifex.live = window.Transifex.live || {};
    window.Transifex.live._ = window.Transifex.live._ || {};
    window.Transifex.live.sidebar = window.Transifex.live.sidebar || {};
    window.liveSettings = window.liveSettings || {};
    var TXLIVE = window.Transifex.live;
    var TXLIVE_PRIVATE = window.Transifex.live._;
    var TXLIVE_SIDEBAR = window.Transifex.live.sidebar;
    TXLIVE_PRIVATE.isNotTextual = /^(&nbsp;|\s|\d|[-\/:-?~@#!"^_`\.,\[\]])*$/;
    if (TXLIVE.loaded && TXLIVE.lib_version &&
        TXLIVE.lib_version >= LIB_VERSION) return;
    TXLIVE.loaded = true;
    TXLIVE.ready = false;
    TXLIVE.autocollect_ready = false;
    TXLIVE.load_msec = 0;
    TXLIVE.group = "";
    var benchmark = 0;
    var AUTOCOLLECT_EXPIRE_MSEC = 8 * 60 * 60 * 1E3;
    var SIDEBAR_URL_TRIGGER = "transifex";
    var console = window.console;
    TXLIVE.lib_version = LIB_VERSION;
    TXLIVE.raven_extra = {
        lib_version: TXLIVE.lib_version,
        url: TXLIVE.editor && TXLIVE.editor.url ? TXLIVE.editor.url : document.location.href,
        iframe: TXLIVE.editor ? true : false
    };
    TXLIVE.settings = {
        autocollected: false,
        has_storage: false,
        dynamic: true
    };

    function setSettings(options, override) {
        if (!options) return;
        if (override)
            for (var k in options) TXLIVE.settings[k] = options[k];
        else
            for (var k in options)
                if (window.liveSettings[k] === undefined) TXLIVE.settings[k] = options[k];
        TXLIVE.settings.autocollect = Boolean(TXLIVE.settings.autocollect | 0);
        TXLIVE.settings.prerender = Boolean(TXLIVE.settings.prerender | 0);
        TXLIVE.settings.dynamic = Boolean(TXLIVE.settings.dynamic | 0);
        TXLIVE.settings.staging = Boolean(TXLIVE.settings.staging | 0);
        TXLIVE.settings.cdn = TXLIVE.settings.cdn ||
            "//cdn.transifex.com/";
        TXLIVE.settings.autocollect_url = TXLIVE.settings.autocollect_url || "//clsrv.transifex.com";
        TXLIVE.settings.sidebar_base_url = TXLIVE.settings.sidebar_base_url || "https://www.transifex.com";
        TXLIVE.settings.assets_base_url = TXLIVE.settings.assets_base_url || TXLIVE.settings.sidebar_base_url;
        TXLIVE.settings.sidebar_lang = TXLIVE.settings.sidebar_lang || "en";
        if (TXLIVE.settings.detectlang && typeof TXLIVE.settings.detectlang === "string") TXLIVE.settings.detectlang = Boolean(TXLIVE.settings.detectlang |
            0);
        if (TXLIVE.settings.parse_attr && TXLIVE.settings.parse_attr.length)
            for (var i = 0; i < TXLIVE.settings.parse_attr.length; ++i) TXLIVE.settings.parse_attr[i] = TXLIVE.settings.parse_attr[i].toLowerCase();
        if (TXLIVE.settings.ignore_tags && TXLIVE.settings.ignore_tags.length)
            for (var i = 0; i < TXLIVE.settings.ignore_tags.length; ++i) TXLIVE.settings.ignore_tags[i] = (TXLIVE.settings.ignore_tags[i] || "").toUpperCase();
        if (TXLIVE.settings.ignore_class && TXLIVE.settings.ignore_class.length)
            for (var i = 0; i < TXLIVE.settings.ignore_class.length; ++i) TXLIVE.settings.ignore_class[i] =
                (TXLIVE.settings.ignore_class[i] || "").toLowerCase()
    }

    function wrapError(err) {
        if (err && err.message) err.message = "TXLive: " + err.message;
        return err
    }
    if (!window.Raven) {
        ! function(a, b) {
            function c(a, b) {
                var c, d;
                b = b || {}, a = "raven" + a.substr(0, 1).toUpperCase() + a.substr(1), document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(a, !0, !0)) : (c = document.createEventObject(), c.eventType = a);
                for (d in b) j(b, d) && (c[d] = b[d]);
                if (document.createEvent) document.dispatchEvent(c);
                else try {
                    document.fireEvent("on" + c.eventType.toLowerCase(),
                        c)
                } catch (e$0) {}
            }

            function d(a) {
                this.name = "RavenConfigError", this.message = a
            }

            function e(a) {
                var b = Q.exec(a),
                    c = {},
                    e = 7;
                try {
                    for (; e--;) c[P[e]] = b[e] || ""
                } catch (f$1) {
                    throw new d("Invalid DSN: " + a);
                }
                if (c.pass) throw new d("Do not specify your private key in the DSN!");
                return c
            }

            function f(a) {
                return "undefined" == typeof a
            }

            function g(a) {
                return "function" == typeof a
            }

            function h(a) {
                return "string" == typeof a
            }

            function i(a) {
                for (var b in a) return !1;
                return !0
            }

            function j(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function k(a,
                b) {
                var c, d;
                if (f(a.length))
                    for (c in a) j(a, c) && b.call(null, c, a[c]);
                else if (d = a.length)
                    for (c = 0; d > c; c++) b.call(null, c, a[c])
            }

            function l() {
                J = "?sentry_version=4&sentry_client=raven-js/" + O.VERSION + "&sentry_key=" + H
            }

            function m(a, b) {
                var d = [];
                a.stack && a.stack.length && k(a.stack, function(a, b) {
                    var c = n(b);
                    c && d.push(c)
                }), c("handle", {
                    stackInfo: a,
                    options: b
                }), p(a.name, a.message, a.url, a.lineno, d, b)
            }

            function n(a) {
                if (a.url) {
                    var b, c = {
                            filename: a.url,
                            lineno: a.line,
                            colno: a.column,
                            "function": a.func || "?"
                        },
                        d = o(a);
                    if (d) {
                        var e = ["pre_context", "context_line", "post_context"];
                        for (b = 3; b--;) c[e[b]] = d[b]
                    }
                    return c.in_app = !(!M.includePaths.test(c.filename) || /(Raven|TraceKit)\./.test(c["function"]) || /raven\.(min\.)?js$/.test(c.filename)), c
                }
            }

            function o(a) {
                if (a.context && M.fetchContext) {
                    for (var b = a.context, c = ~~(b.length / 2), d = b.length, e = !1; d--;)
                        if (b[d].length > 300) {
                            e = !0;
                            break
                        }
                    if (e) {
                        if (f(a.column)) return;
                        return [
                            [], b[c].substr(a.column, 50), []
                        ]
                    }
                    return [b.slice(0, c), b[c], b.slice(c + 1)]
                }
            }

            function p(a, b, c, d, e, f) {
                var g, h;
                b += "", ("Error" !== a || b) &&
                    (M.ignoreErrors.test(b) || (e && e.length ? (c = e[0].filename || c, e.reverse(), g = {
                        frames: e
                    }) : c && (g = {
                        frames: [{
                            filename: c,
                            lineno: d,
                            in_app: !0
                        }]
                    }), b = r(b, 100), M.ignoreUrls && M.ignoreUrls.test(c) || (!M.whitelistUrls || M.whitelistUrls.test(c)) && (h = d ? b + " at " + d : b, t(q({
                        exception: {
                            type: a,
                            value: b
                        },
                        stacktrace: g,
                        culprit: c,
                        message: h
                    }, f)))))
            }

            function q(a, b) {
                return b ? (k(b, function(b, c) {
                    a[b] = c
                }), a) : a
            }

            function r(a, b) {
                return a.length <= b ? a : a.substr(0, b) + "\u00e2\u20ac\u00a6"
            }

            function s() {
                var a = {
                    url: document.location.href,
                    headers: {
                        "User-Agent": navigator.userAgent
                    }
                };
                return document.referrer && (a.headers.Referer = document.referrer), a
            }

            function t(a) {
                v() && (a = q({
                    project: I,
                    logger: M.logger,
                    site: M.site,
                    platform: "javascript",
                    request: s()
                }, a), a.tags = q(M.tags, a.tags), a.extra = q(M.extra, a.extra), i(a.tags) && delete a.tags, i(a.extra) && delete a.extra, G && (a.user = G), g(M.dataCallback) && (a = M.dataCallback(a)), (!g(M.shouldSendCallback) || M.shouldSendCallback(a)) && (E = a.event_id || (a.event_id = x()), u(a)))
            }

            function u(a) {
                var b = new Image,
                    d = F + J + "&sentry_data=" + encodeURIComponent(JSON.stringify(a));
                b.onload = function() {
                    c("success", {
                        data: a,
                        src: d
                    })
                }, b.onerror = b.onabort = function() {
                    c("failure", {
                        data: a,
                        src: d
                    })
                }, b.src = d
            }

            function v() {
                return L ? F ? !0 : (y("error", "Error: Raven has not been configured."), !1) : !1
            }

            function w(a) {
                for (var b, c = [], d = 0, e = a.length; e > d; d++) b = a[d], h(b) ? c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : b && b.source && c.push(b.source);
                return new RegExp(c.join("|"), "i")
            }

            function x() {
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                    var b = 16 * Math.random() | 0,
                        c = "x" ==
                        a ? b : 3 & b | 8;
                    return c.toString(16)
                })
            }

            function y(b, c) {
                a.console && console[b] && O.debug && console[b](c)
            }

            function z() {
                var b = a.RavenConfig;
                b && O.config(b.dsn, b.config).install()
            }
            var A = {
                    remoteFetching: !1,
                    collectWindowErrors: !0,
                    linesOfContext: 7
                },
                B = [].slice,
                C = "?";
            A.wrap = function(a) {
                    function b() {
                        try {
                            return a.apply(this, arguments)
                        } catch (b$2) {
                            throw A.report(b$2), b$2;
                        }
                    }
                    return b
                }, A.report = function() {
                    function c(a) {
                        h(), o.push(a)
                    }

                    function d(a) {
                        for (var b = o.length - 1; b >= 0; --b) o[b] === a && o.splice(b, 1)
                    }

                    function e() {
                        i(), o = []
                    }

                    function f(a, b) {
                        var c = null;
                        if (!b || A.collectWindowErrors) {
                            for (var d in o)
                                if (j(o, d)) try {
                                    o[d].apply(null, [a].concat(B.call(arguments, 2)))
                                } catch (e$3) {
                                    c = e$3
                                }
                                if (c) throw c;
                        }
                    }

                    function g(a, b, c, d, e) {
                        var g = null;
                        if (r) A.computeStackTrace.augmentStackTraceWithInitialElement(r, b, c, a), k();
                        else if (e) g = A.computeStackTrace(e), f(g, !0);
                        else {
                            var h = {
                                url: b,
                                line: c,
                                column: d
                            };
                            h.func = A.computeStackTrace.guessFunctionName(h.url, h.line), h.context = A.computeStackTrace.gatherContext(h.url, h.line), g = {
                                message: a,
                                url: document.location.href,
                                stack: [h]
                            }, f(g, !0)
                        }
                        return m ? m.apply(this, arguments) : !1
                    }

                    function h() {
                        n || (m = a.onerror, a.onerror = g, n = !0)
                    }

                    function i() {
                        n && (a.onerror = m, n = !1, m = b)
                    }

                    function k() {
                        var a = r,
                            b = p;
                        p = null, r = null, q = null, f.apply(null, [a, !1].concat(b))
                    }

                    function l(b, c) {
                        var d = B.call(arguments, 1);
                        if (r) {
                            if (q === b) return;
                            k()
                        }
                        var e = A.computeStackTrace(b);
                        if (r = e, q = b, p = d, a.setTimeout(function() {
                                q === b && k()
                            }, e.incomplete ? 2E3 : 0), c !== !1) throw b;
                    }
                    var m, n, o = [],
                        p = null,
                        q = null,
                        r = null;
                    return l.subscribe = c, l.unsubscribe = d, l.uninstall = e, l
                }(), A.computeStackTrace =
                function() {
                    function b(b) {
                        if (!A.remoteFetching) return "";
                        try {
                            var c = function() {
                                    try {
                                        return new a.XMLHttpRequest
                                    } catch (b$4) {
                                        return new a.ActiveXObject("Microsoft.XMLHTTP")
                                    }
                                },
                                d = c();
                            return d.open("GET", b, !1), d.send(""), d.responseText
                        } catch (e$5) {
                            return ""
                        }
                    }

                    function c(a) {
                        if (!h(a)) return [];
                        if (!j(v, a)) {
                            var c = ""; - 1 !== a.indexOf(document.domain) && (c = b(a)), v[a] = c ? c.split("\n") : []
                        }
                        return v[a]
                    }

                    function d(a, b) {
                        var d, e = /function ([^(]*)\(([^)]*)\)/,
                            g = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                            h = "",
                            i = 10,
                            j = c(a);
                        if (!j.length) return C;
                        for (var k = 0; i > k; ++k)
                            if (h = j[b - k] + h, !f(h)) {
                                if (d = g.exec(h)) return d[1];
                                if (d = e.exec(h)) return d[1]
                            }
                        return C
                    }

                    function e(a, b) {
                        var d = c(a);
                        if (!d.length) return null;
                        var e = [],
                            g = Math.floor(A.linesOfContext / 2),
                            h = g + A.linesOfContext % 2,
                            i = Math.max(0, b - g - 1),
                            j = Math.min(d.length, b + h - 1);
                        b -= 1;
                        for (var k = i; j > k; ++k) f(d[k]) || e.push(d[k]);
                        return e.length > 0 ? e : null
                    }

                    function g(a) {
                        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
                    }

                    function i(a) {
                        return g(a).replace("<", "(?:<|&lt;)").replace(">",
                            "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
                    }

                    function k(a, b) {
                        for (var d, e, f = 0, g = b.length; g > f; ++f)
                            if ((d = c(b[f])).length && (d = d.join("\n"), e = a.exec(d))) return {
                                url: b[f],
                                line: d.substring(0, e.index).split("\n").length,
                                column: e.index - d.lastIndexOf("\n", e.index) - 1
                            };
                        return null
                    }

                    function l(a, b, d) {
                        var e, f = c(b),
                            h = new RegExp("\\b" + g(a) + "\\b");
                        return d -= 1, f && f.length > d && (e = h.exec(f[d])) ? e.index : null
                    }

                    function m(b) {
                        for (var c, d, e, f, h = [a.location.href], j = document.getElementsByTagName("script"),
                                l = "" + b, m = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, n = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, o = 0; o < j.length; ++o) {
                            var p = j[o];
                            p.src && h.push(p.src)
                        }
                        if (e = m.exec(l)) {
                            var q = e[1] ? "\\s+" + e[1] : "",
                                r = e[2].split(",").join("\\s*,\\s*");
                            c = g(e[3]).replace(/;$/, ";?"), d = new RegExp("function" + q + "\\s*\\(\\s*" + r + "\\s*\\)\\s*{\\s*" + c + "\\s*}")
                        } else d = new RegExp(g(l).replace(/\s+/g, "\\s+"));
                        if (f = k(d, h)) return f;
                        if (e = n.exec(l)) {
                            var s = e[1];
                            if (c = i(e[2]), d = new RegExp("on" +
                                    s + "=[\\'\"]\\s*" + c + "\\s*[\\'\"]", "i"), f = k(d, h[0])) return f;
                            if (d = new RegExp(c), f = k(d, h)) return f
                        }
                        return null
                    }

                    function n(a) {
                        if (!a.stack) return null;
                        for (var b, c, g = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/i, h = /^\s*(\S*)(?:\((.*?)\))?@((?:file|https?|chrome).*?):(\d+)(?::(\d+))?\s*$/i, i = a.stack.split("\n"), j = [], k = /^(.*) is undefined$/.exec(a.message), m = 0, n = i.length; n > m; ++m) {
                            if (b = h.exec(i[m])) c = {
                                url: b[3],
                                func: b[1] || C,
                                args: b[2] ?
                                    b[2].split(",") : "",
                                line: +b[4],
                                column: b[5] ? +b[5] : null
                            };
                            else {
                                if (!(b = g.exec(i[m]))) continue;
                                c = {
                                    url: b[2],
                                    func: b[1] || C,
                                    line: +b[3],
                                    column: b[4] ? +b[4] : null
                                }
                            }!c.func && c.line && (c.func = d(c.url, c.line)), c.line && (c.context = e(c.url, c.line)), j.push(c)
                        }
                        return j.length ? (j[0].line && !j[0].column && k ? j[0].column = l(k[1], j[0].url, j[0].line) : j[0].column || f(a.columnNumber) || (j[0].column = a.columnNumber + 1), {
                            name: a.name,
                            message: a.message,
                            url: document.location.href,
                            stack: j
                        }) : null
                    }

                    function o(a) {
                        for (var b, c = a.stacktrace, f = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,
                                g = c.split("\n"), h = [], i = 0, j = g.length; j > i; i += 2)
                            if (b = f.exec(g[i])) {
                                var k = {
                                    line: +b[1],
                                    column: +b[2],
                                    func: b[3] || b[4],
                                    args: b[5] ? b[5].split(",") : [],
                                    url: b[6]
                                };
                                if (!k.func && k.line && (k.func = d(k.url, k.line)), k.line) try {
                                    k.context = e(k.url, k.line)
                                } catch (l$6) {}
                                k.context || (k.context = [g[i + 1]]), h.push(k)
                            }
                        return h.length ? {
                            name: a.name,
                            message: a.message,
                            url: document.location.href,
                            stack: h
                        } : null
                    }

                    function p(b) {
                        var f = b.message.split("\n");
                        if (f.length < 4) return null;
                        var g, h, l, m, n = /^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,
                            o = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,
                            p = /^\s*Line (\d+) of function script\s*$/i,
                            q = [],
                            r = document.getElementsByTagName("script"),
                            s = [];
                        for (h in r) j(r, h) && !r[h].src && s.push(r[h]);
                        for (h = 2, l = f.length; l > h; h += 2) {
                            var t = null;
                            if (g = n.exec(f[h])) t = {
                                url: g[2],
                                func: g[3],
                                line: +g[1]
                            };
                            else if (g = o.exec(f[h])) {
                                t = {
                                    url: g[3],
                                    func: g[4]
                                };
                                var u = +g[1],
                                    v = s[g[2] - 1];
                                if (v && (m = c(t.url))) {
                                    m = m.join("\n");
                                    var w = m.indexOf(v.innerText);
                                    w >= 0 && (t.line = u + m.substring(0, w).split("\n").length)
                                }
                            } else if (g =
                                p.exec(f[h])) {
                                var x = a.location.href.replace(/#.*$/, ""),
                                    y = g[1],
                                    z = new RegExp(i(f[h + 1]));
                                m = k(z, [x]), t = {
                                    url: x,
                                    line: m ? m.line : y,
                                    func: ""
                                }
                            }
                            if (t) {
                                t.func || (t.func = d(t.url, t.line));
                                var A = e(t.url, t.line),
                                    B = A ? A[Math.floor(A.length / 2)] : null;
                                t.context = A && B.replace(/^\s*/, "") === f[h + 1].replace(/^\s*/, "") ? A : [f[h + 1]], q.push(t)
                            }
                        }
                        return q.length ? {
                            name: b.name,
                            message: f[0],
                            url: document.location.href,
                            stack: q
                        } : null
                    }

                    function q(a, b, c, f) {
                        var g = {
                            url: b,
                            line: c
                        };
                        if (g.url && g.line) {
                            a.incomplete = !1, g.func || (g.func = d(g.url, g.line)),
                                g.context || (g.context = e(g.url, g.line));
                            var h = / '([^']+)' /.exec(f);
                            if (h && (g.column = l(h[1], g.url, g.line)), a.stack.length > 0 && a.stack[0].url === g.url) {
                                if (a.stack[0].line === g.line) return !1;
                                if (!a.stack[0].line && a.stack[0].func === g.func) return a.stack[0].line = g.line, a.stack[0].context = g.context, !1
                            }
                            return a.stack.unshift(g), a.partial = !0, !0
                        }
                        return a.incomplete = !0, !1
                    }

                    function r(a, b) {
                        for (var c, e, f, g = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, h = [], i = {}, j = !1, k = r.caller; k && !j; k = k.caller)
                            if (k !==
                                s && k !== A.report) {
                                if (e = {
                                        url: null,
                                        func: C,
                                        line: null,
                                        column: null
                                    }, k.name ? e.func = k.name : (c = g.exec(k.toString())) && (e.func = c[1]), f = m(k)) {
                                    e.url = f.url, e.line = f.line, e.func === C && (e.func = d(e.url, e.line));
                                    var n = / '([^']+)' /.exec(a.message || a.description);
                                    n && (e.column = l(n[1], f.url, f.line))
                                }
                                i["" + k] ? j = !0 : i["" + k] = !0, h.push(e)
                            }
                        b && h.splice(0, b);
                        var o = {
                            name: a.name,
                            message: a.message,
                            url: document.location.href,
                            stack: h
                        };
                        return q(o, a.sourceURL || a.fileName, a.line || a.lineNumber, a.message || a.description), o
                    }

                    function s(a,
                        b) {
                        var c = null;
                        b = null == b ? 0 : +b;
                        try {
                            if (c = o(a)) return c
                        } catch (d$7) {
                            if (u) throw d$7;
                        }
                        try {
                            if (c = n(a)) return c
                        } catch (d$8) {
                            if (u) throw d$8;
                        }
                        try {
                            if (c = p(a)) return c
                        } catch (d$9) {
                            if (u) throw d$9;
                        }
                        try {
                            if (c = r(a, b + 1)) return c
                        } catch (d$10) {
                            if (u) throw d$10;
                        }
                        return {}
                    }

                    function t(a) {
                        a = (null == a ? 0 : +a) + 1;
                        try {
                            throw new Error;
                        } catch (b$11) {
                            return s(b$11, a + 1)
                        }
                    }
                    var u = !1,
                        v = {};
                    return s.augmentStackTraceWithInitialElement = q, s.guessFunctionName = d, s.gatherContext = e, s.ofCaller = t, s
                }();
            var D, E, F, G, H, I, J, K = a.Raven,
                L = !(!a.JSON || !a.JSON.stringify),
                M = {
                    logger: "javascript",
                    ignoreErrors: [],
                    ignoreUrls: [],
                    whitelistUrls: [],
                    includePaths: [],
                    collectWindowErrors: !0,
                    tags: {},
                    extra: {}
                },
                N = !1,
                O = {
                    VERSION: "1.1.16",
                    debug: !0,
                    noConflict: function() {
                        return a.Raven = K, O
                    },
                    config: function(a, b) {
                        if (F) return y("error", "Error: Raven has already been configured"), O;
                        if (!a) return O;
                        var c = e(a),
                            d = c.path.lastIndexOf("/"),
                            f = c.path.substr(1, d);
                        return b && k(b, function(a, b) {
                                M[a] = b
                            }), M.ignoreErrors.push("Script error."), M.ignoreErrors.push("Script error"), M.ignoreErrors.push("Javascript error: Script error on line 0"),
                            M.ignoreErrors.push("Javascript error: Script error. on line 0"), M.ignoreErrors = w(M.ignoreErrors), M.ignoreUrls = M.ignoreUrls.length ? w(M.ignoreUrls) : !1, M.whitelistUrls = M.whitelistUrls.length ? w(M.whitelistUrls) : !1, M.includePaths = w(M.includePaths), H = c.user, I = c.path.substr(d + 1), F = "//" + c.host + (c.port ? ":" + c.port : "") + "/" + f + "api/" + I + "/store/", c.protocol && (F = c.protocol + ":" + F), M.fetchContext && (A.remoteFetching = !0), M.linesOfContext && (A.linesOfContext = M.linesOfContext), A.collectWindowErrors = !!M.collectWindowErrors,
                            l(), O
                    },
                    install: function() {
                        return v() && !N && (A.report.subscribe(m), N = !0), O
                    },
                    context: function(a, c, d) {
                        return g(a) && (d = c || [], c = a, a = b), O.wrap(a, c).apply(this, d)
                    },
                    wrap: function(a, c) {
                        function d() {
                            for (var b = [], d = arguments.length, e = !a || a && a.deep !== !1; d--;) b[d] = e ? O.wrap(a, arguments[d]) : arguments[d];
                            try {
                                return c.apply(this, b)
                            } catch (f$12) {
                                throw O.captureException(f$12, a), f$12;
                            }
                        }
                        if (f(c) && !g(a)) return a;
                        if (g(a) && (c = a, a = b), !g(c)) return c;
                        if (c.__raven__) return c;
                        for (var e in c) j(c, e) && (d[e] = c[e]);
                        return d.__raven__ = !0, d.__inner__ = c, d
                    },
                    uninstall: function() {
                        return A.report.uninstall(), N = !1, O
                    },
                    captureException: function(a, b) {
                        if (!(a instanceof Error)) return O.captureMessage(a, b);
                        D = a;
                        try {
                            A.report(a, b)
                        } catch (c$13) {
                            if (a !== c$13) throw c$13;
                        }
                        return O
                    },
                    captureMessage: function(a, b) {
                        return t(q({
                            message: a + ""
                        }, b)), O
                    },
                    setUserContext: function(a) {
                        return G = a, O
                    },
                    setExtraContext: function(a) {
                        return M.extra = a || {}, O
                    },
                    setTagsContext: function(a) {
                        return M.tags = a || {}, O
                    },
                    lastException: function() {
                        return D
                    },
                    lastEventId: function() {
                        return E
                    }
                };
            O.setUser = O.setUserContext;
            var P = "source protocol user pass host port path".split(" "),
                Q = /^(?:(\w+):)?\/\/(\w+)(:\w+)?@([\w\.-]+)(?::(\d+))?(\/.*)/;
            d.prototype = new Error, d.prototype.constructor = d, z(), a.Raven = O, "function" == typeof define && define.amd && define("raven", [], function() {
                return O
            })
        }(this);
        Raven.config("https://7569be2778c0403186b7f224b35b68ed@app.getsentry.com/17391", {
            collectWindowErrors: false,
            whitelistUrls: [],
            ignoreErrors: ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument",
                "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage"
            ],
            ignoreUrls: [/graph\.facebook\.com/i, /connect\.facebook\.net\/en_US\/all\.js/i, /eatdifferent\.com\.woopra-ns\.com/i, /static\.woopra\.com\/js\/woopra\.js/i, /extensions\//i, /^chrome:\/\//i, /127\.0\.0\.1:4001\/isrunning/i, /webappstoolbarba\.texthelp\.com\//i,
                /metrics\.itunes\.apple\.com\.edgesuite\.net\//i
            ],
            dataCallback: function(data) {
                data.extra = TXLIVE.raven_extra;
                return data
            },
            shouldSendCallback: function(data) {
                if (data && data.message && data.message.length) return data.message.indexOf("TXLive:") >= 0 || data.message.indexOf("TXBridge:") >= 0;
                return true
            }
        }).install()
    }
    TXLIVE.logger = {
        serialize: function(obj) {
            if (typeof obj !== "string")
                if (obj.message) obj = obj.message;
                else try {
                    obj = JSON.stringify(obj)
                } catch (err) {
                    obj = ""
                }
                return obj
        },
        info: function(message) {
            var output = "[TXLIVE][INFO] " +
                TXLIVE.logger.serialize(message);
            if (window.liveSettings.debug && console && console.log) console.log(output);
            return output
        },
        debug: function(message) {
            var output = "[TXLIVE][DEBUG] " + TXLIVE.logger.serialize(message);
            if (window.liveSettings.debug && console && console.log) console.log(output);
            return output
        },
        error: function(err) {
            var output = "[TXLIVE][ERROR] " + TXLIVE.logger.serialize(err);
            if (window.liveSettings.debug && console && console.log) console.log(output);
            if (window.Raven)
                if (typeof err === "string") window.Raven.captureException(wrapError(new Error(err)));
                else window.Raven.captureException(wrapError(err));
            return output
        }
    };
    (function() {
        try {
            var css = ".txlive {display: none;}\n";
            var head = document.head || document.getElementsByTagName("head")[0];
            var style = document.createElement("style");
            style.type = "text/css";
            if (style.styleSheet) style.styleSheet.cssText = css;
            else style.appendChild(document.createTextNode(css));
            head.appendChild(style)
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    })();

    function showDom() {
        try {
            var el = null;
            if (document.getElementsByClassName) el = document.getElementsByClassName("txlive");
            else el = document.getElementsByTagName("*");
            if (el && el.length) {
                var i = el.length;
                while (i--) el[i].className = (el[i].className || "").replace(/(?:^|\s)txlive(?!\S)/g, "")
            }
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }

    function bindReady(handler) {
        var called = false;

        function ready() {
            if (called) return;
            called = true;
            handler()
        }
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", ready, false);
        else if (document.attachEvent) {
            try {
                var isFrame = window.frameElement != null
            } catch (e) {}
            if (document.documentElement.doScroll &&
                !isFrame) {
                var tryScroll = function() {
                    if (called) return;
                    try {
                        document.documentElement.doScroll("left");
                        ready()
                    } catch (e$14) {
                        setTimeout(tryScroll, 10)
                    }
                };
                tryScroll()
            }
            document.attachEvent("onreadystatechange", function() {
                if (document.readyState === "complete") ready()
            })
        }
        if (window.addEventListener) window.addEventListener("load", ready, false);
        else if (window.attachEvent) window.attachEvent("onload", ready);
        else {
            var fn = window.onload;
            window.onload = function() {
                fn && fn();
                ready()
            }
        }
    }

    function bindLoad(handler) {
        if (window.addEventListener) window.addEventListener("load",
            handler, false);
        else if (window.attachEvent) window.attachEvent("onload", handler)
    }(function() {
        TXLIVE_PRIVATE.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function f_msec(n) {
            if (n < 10) return "00" + n;
            else if (n < 100) return "0" + n;
            return n
        }
        TXLIVE_PRIVATE.JSON.__Date__toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "." + f_msec(this.getUTCMilliseconds()) + "Z" : null
        };
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ?
                    c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value && typeof value === "object" && typeof value.toJSON === "function") value = value.toJSON(key);
            if (typeof rep === "function") value = rep.call(holder, key, value);
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) return "null";
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) partial[i] = str(i, value) || "null";
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1)
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                    } else
                        for (k in value)
                            if (Object.prototype.hasOwnProperty.call(value,
                                    k)) {
                                v = str(k, value);
                                if (v) partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        TXLIVE_PRIVATE.JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number")
                for (i = 0; i < space; i += 1) indent += " ";
            else if (typeof space === "string") indent = space;
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) throw new Error("JSON.stringify");
            return str("", {
                "": value
            })
        };
        TXLIVE_PRIVATE.JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object")
                    for (k in value)
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) value[k] = v;
                            else delete value[k]
                        }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            });
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse");
        };
        if (typeof JSON !== "object") JSON = {};
        if (typeof Date.prototype.toJSON !== "function") {
            Date.prototype.toJSON = TXLIVE_PRIVATE.JSON.__Date__toJSON;
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            }
        }
        if (typeof JSON.parse !==
            "function") JSON.parse = TXLIVE_PRIVATE.JSON.parse;
        if (typeof JSON.stringify !== "function") JSON.stringify = TXLIVE_PRIVATE.JSON.stringify
    })();

    function callFunctionArray(fcallarray, param) {
        if (!fcallarray) return;
        var is_dynamic_on = TXLIVE.isDynamicPageOn();
        TXLIVE.dynamicPageOff();
        for (var i = 0; i < fcallarray.length; ++i) try {
            fcallarray[i](param)
        } catch (err) {
            TXLIVE.logger.error(err)
        }
        if (is_dynamic_on) TXLIVE.dynamicPageOn()
    }

    function removeFromFunctionArray(fcallarray, fcall) {
        if (!fcallarray) return;
        try {
            var index = fcallarray.indexOf(fcall);
            if (index >= 0) fcallarray.splice(index, 1)
        } catch (err) {
            TXLIVE.logger.error(err)
        }
    }

    function isFunction(obj) {
        return typeof obj === "function"
    }

    function isString(obj) {
        return typeof obj === "string"
    }
    TXLIVE_PRIVATE.trim = function(string) {
        return string.replace(/^\s+|\s+$/g, "")
    };
    if (!String.prototype.trim) String.prototype.trim = function() {
        return TXLIVE_PRIVATE.trim(this)
    };
    TXLIVE.assetUrl = function(url, default_host) {
        if (!url || !default_host) return url;
        var locase_url = url.toLowerCase().trim();
        if (locase_url.indexOf("http://") ==
            0 || locase_url.indexOf("https://") == 0 || locase_url.indexOf("//") == 0) return url;
        return default_host + (default_host.slice(-1) == "/" ? "" : "/") + (url.indexOf("/") == 0 ? url.slice(1) : url)
    };
    TXLIVE.loadScript = function(url, callback, text, attributes) {
        if (url && url.indexOf("//") == 0)
            if (/PhantomJS/.test(navigator.userAgent)) url = "http:" + url;
            else if (TXLIVE_PRIVATE.getWindowLocation().protocol) url = TXLIVE_PRIVATE.getWindowLocation().protocol + url;
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) script.onreadystatechange =
            function() {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    if (callback) callback()
                }
            };
        else {
            script.onload = function() {
                if (callback) callback()
            };
            script.onerror = function() {
                if (callback) callback();
                callFunctionArray(TXLIVE.__onerror, "[ERR1] Cannot load remote url: " + url)
            }
        }
        var attributes = attributes || [];
        for (var i = attributes.length; i--;) script[attributes[i].name] = attributes[i].value;
        if (text) script.text = text;
        if (url) script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script)
    };
    TXLIVE_PRIVATE.getBrowserLocale = function() {
        if (navigator.languages && navigator.languages.length) {
            for (var i = 0; i < navigator.languages.length; ++i) {
                var code = TXLIVE.normalizeLangCode(navigator.languages[i]);
                if (TXLIVE.hasLanguageCode(code)) return code
            }
            for (var i = 0; i < navigator.languages.length; ++i) {
                var code = TXLIVE.matchLanguageCode(navigator.languages[i]);
                if (code) return code
            }
        }
        if (navigator.userLanguage) {
            var code = TXLIVE.normalizeLangCode(navigator.userLanguage);
            if (TXLIVE.hasLanguageCode(code)) return code;
            code =
                TXLIVE.matchLanguageCode(navigator.userLanguage);
            if (code) return code
        }
        if (navigator.language) {
            var code = TXLIVE.normalizeLangCode(navigator.language);
            if (TXLIVE.hasLanguageCode(code)) return code;
            code = TXLIVE.matchLanguageCode(navigator.language);
            if (code) return code
        }
        return null
    };

    function mergeArrays(array1, array2) {
        var i = array2.length,
            a;
        while (i--) {
            a = array2[i];
            if (array1.indexOf(a) < 0) array1.push(a)
        }
    }

    function removeFromArray(list, value) {
        var index = list.indexOf(value);
        if (index != -1) {
            list.splice(index, 1);
            return true
        }
        return false
    }

    function encodeString(str) {
        return str.replace(/\u00a0/g, "&nbsp;")
    }

    function decodeString(str) {
        return str.replace(/&nbsp;/g, "\u00a0")
    }
    TXLIVE_PRIVATE.stripWhitespace = function(str) {
        if (!str || !str.trim().length) return null;
        return encodeString(str).replace(/\s+/g, " ").trim()
    };
    TXLIVE_PRIVATE.getElementsByClassName = function(node, classname) {
        if (!node) return [];
        var a = [];
        var re = new RegExp("(^| )" + classname + "( |$)");
        var els = node.getElementsByTagName("*");
        for (var i = 0, j = els.length; i < j; i++)
            if (re.test(els[i].className)) a.push(els[i]);
        return a
    };
    TXLIVE_PRIVATE.bindClick = function(node, fn) {
        if (node.addEventListener) node.addEventListener("click", function() {
            fn && fn(node)
        });
        else node.attachEvent("onclick", function() {
            fn && fn(node)
        })
    };
    TXLIVE_PRIVATE.hasClass = function(node, cls) {
        return (" " + node.className + " ").indexOf(" " + cls + " ") >= 0
    };
    TXLIVE_PRIVATE.removeClass = function(node, cls) {
        if (TXLIVE_PRIVATE.hasClass(node, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            node.className = node.className.replace(reg, " ")
        }
    };
    TXLIVE_PRIVATE.addClass = function(node,
        cls) {
        if (!TXLIVE_PRIVATE.hasClass(node, cls) && node.className != undefined && node.className.baseVal == undefined) node.className = (node.className || "") + " " + cls
    };
    TXLIVE_PRIVATE.removeNodeByID = function(id) {
        var element = document.getElementById(id);
        if (element && element.parentNode) element.parentNode.removeChild(element)
    };
    TXLIVE_PRIVATE.escapeLanguageCode = function(code) {
        return code.replace(/-/g, "_").replace(/[.@]/g, "__")
    };
    TXLIVE_PRIVATE.constructPath = function(pathname, search) {
        search = search || "";
        pathname = pathname || "";
        if (search && search[0] === "?") {
            search = search.substr(1);
            var search_params = search.split("&");
            var index = search_params.indexOf(SIDEBAR_URL_TRIGGER);
            if (index != -1) search_params.splice(index, 1);
            search = search_params.join("&");
            if (search) search = "?" + search
        }
        return pathname + search
    };
    TXLIVE_PRIVATE.getWindowLocation = function() {
        return window.location
    };
    TXLIVE_PRIVATE.getWindowPath = function() {
        return TXLIVE_PRIVATE.constructPath(window.location.pathname, window.location.search)
    };
    TXLIVE_PRIVATE.getWindowHost = function() {
        return document.location.host
    };
    TXLIVE_PRIVATE.isGoogleTranslated = function() {
        return document.documentElement && document.documentElement.className && document.documentElement.className.match("translated-")
    };
    TXLIVE.doCORSRequest = function(url, method, data, callback, errback) {
        var req;
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest;
            if ("withCredentials" in req) {
                req.open(method, url, true);
                if (errback) req.onerror = errback;
                req.onreadystatechange = function() {
                    if (req.readyState === 4)
                        if (req.status >= 200 && req.status < 400) callback && callback(req.responseText);
                        else errback && errback(new Error("doCORSRequest failed with status " + req.status + " for: " + TXLIVE_PRIVATE.getWindowLocation().href), req.status)
                };
                req.send(data)
            }
        } else if (window.XDomainRequest) {
            req = new XDomainRequest;
            req.open(method, url);
            if (errback) req.onerror = errback;
            req.onload = function() {
                callback && callback(req.responseText)
            };
            req.send(data)
        } else errback && errback(new Error("doCORSRequest: CORS not supported by browser"))
    };
    TXLIVE_PRIVATE.md5 = function() {
        var rotateLeft = function(lValue, iShiftBits) {
            return lValue <<
                iShiftBits | lValue >>> 32 - iShiftBits
        };
        var addUnsigned = function(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = lX & 2147483648;
            lY8 = lY & 2147483648;
            lX4 = lX & 1073741824;
            lY4 = lY & 1073741824;
            lResult = (lX & 1073741823) + (lY & 1073741823);
            if (lX4 & lY4) return lResult ^ 2147483648 ^ lX8 ^ lY8;
            if (lX4 | lY4)
                if (lResult & 1073741824) return lResult ^ 3221225472 ^ lX8 ^ lY8;
                else return lResult ^ 1073741824 ^ lX8 ^ lY8;
            else return lResult ^ lX8 ^ lY8
        };
        var F = function(x, y, z) {
            return x & y | ~x & z
        };
        var G = function(x, y, z) {
            return x & z | y & ~z
        };
        var H = function(x, y, z) {
            return x ^ y ^ z
        };
        var I = function(x, y, z) {
            return y ^ (x | ~z)
        };
        var FF = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var GG = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var HH = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var II = function(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c,
                d), x), ac));
            return addUnsigned(rotateLeft(a, s), b)
        };
        var convertToWordArray = function(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWordsTempOne = lMessageLength + 8;
            var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - lNumberOfWordsTempOne % 64) / 64;
            var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - lByteCount % 4) / 4;
                lBytePosition = lByteCount % 4 * 8;
                lWordArray[lWordCount] =
                    lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
                lByteCount++
            }
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray
        };
        var wordToHex = function(lValue) {
            var WordToHexValue = "",
                WordToHexValueTemp = "",
                lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = lValue >>> lCount * 8 & 255;
                WordToHexValueTemp = "0" +
                    lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2)
            }
            return WordToHexValue
        };
        var uTF8Encode = function(string) {
            string = string.replace(/\x0d\x0a/g, "\n");
            var output = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) output += String.fromCharCode(c);
                else if (c > 127 && c < 2048) {
                    output += String.fromCharCode(c >> 6 | 192);
                    output += String.fromCharCode(c & 63 | 128)
                } else {
                    output += String.fromCharCode(c >> 12 | 224);
                    output += String.fromCharCode(c >> 6 & 63 | 128);
                    output +=
                        String.fromCharCode(c & 63 | 128)
                }
            }
            return output
        };
        return function(string) {
            var x = Array();
            var k, AA, BB, CC, DD, a, b, c, d;
            var S11 = 7,
                S12 = 12,
                S13 = 17,
                S14 = 22;
            var S21 = 5,
                S22 = 9,
                S23 = 14,
                S24 = 20;
            var S31 = 4,
                S32 = 11,
                S33 = 16,
                S34 = 23;
            var S41 = 6,
                S42 = 10,
                S43 = 15,
                S44 = 21;
            string = uTF8Encode(string);
            x = convertToWordArray(string);
            a = 1732584193;
            b = 4023233417;
            c = 2562383102;
            d = 271733878;
            for (k = 0; k < x.length; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
                d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
                c = FF(c, d, a, b, x[k + 2], S13, 606105819);
                b = FF(b, c,
                    d, a, x[k + 3], S14, 3250441966);
                a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
                d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
                c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
                b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
                a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
                d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
                c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
                b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
                a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
                d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
                c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
                b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
                a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
                d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
                c = GG(c, d, a, b, x[k + 11], S23, 643717713);
                b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
                a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
                d = GG(d, a, b, c, x[k + 10], S22, 38016083);
                c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
                b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
                a = GG(a, b, c, d, x[k + 9], S21, 568446438);
                d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
                c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
                b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
                a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
                d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
                c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
                b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
                a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
                d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
                c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
                b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
                a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
                d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
                c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
                b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
                a = HH(a, b, c, d, x[k + 13], S31, 681279174);
                d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
                c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
                b = HH(b, c, d, a, x[k + 6], S34, 76029189);
                a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
                d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
                c = HH(c, d, a, b, x[k + 15], S33, 530742520);
                b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
                a = II(a, b, c, d, x[k + 0], S41, 4096336452);
                d = II(d, a, b, c, x[k + 7], S42, 1126891415);
                c = II(c, d, a, b, x[k + 14], S43, 2878612391);
                b = II(b, c, d, a, x[k + 5], S44, 4237533241);
                a = II(a, b, c, d, x[k + 12], S41, 1700485571);
                d = II(d, a, b, c, x[k + 3], S42, 2399980690);
                c = II(c, d, a, b, x[k + 10], S43, 4293915773);
                b = II(b, c, d, a, x[k + 1], S44, 2240044497);
                a = II(a, b, c, d, x[k + 8], S41, 1873313359);
                d = II(d, a, b, c, x[k + 15], S42, 4264355552);
                c = II(c, d, a, b, x[k + 6], S43, 2734768916);
                b = II(b, c, d, a, x[k + 13], S44, 1309151649);
                a = II(a, b, c, d, x[k + 4], S41, 4149444226);
                d = II(d, a, b, c, x[k + 11], S42, 3174756917);
                c = II(c, d, a, b, x[k + 2], S43, 718787259);
                b = II(b, c, d, a, x[k + 9], S44, 3951481745);
                a = addUnsigned(a, AA);
                b = addUnsigned(b, BB);
                c = addUnsigned(c, CC);
                d = addUnsigned(d, DD)
            }
            var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
            return tempValue.toLowerCase()
        }
    }();
    var tx_local_storage = {};

    function _storage_set_emu(key, value) {
        tx_local_storage[key] = value
    }

    function _storage_get_emu(key) {
        return tx_local_storage[key]
    }

    function _storage_set_localStorage(key, value) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            TXLIVE.logger.error(err);
            _storage_set_emu(key, value)
        }
    }

    function _storage_get_localStorage(key) {
        try {
            var value = window.localStorage.getItem(key);
            if (value) return JSON.parse(value);
            return null
        } catch (err) {
            TXLIVE.logger.error(err);
            return _storage_get_emu(key)
        }
    }

    function _storage_set_sessionStorage(key, value) {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            TXLIVE.logger.error(err);
            _storage_set_emu(key, value)
        }
    }

    function _storage_get_sessionStorage(key) {
        try {
            var value = window.sessionStorage.getItem(key);
            if (value) return JSON.parse(value);
            return null
        } catch (err) {
            TXLIVE.logger.error(err);
            return _storage_get_emu(key)
        }
    }
    TXLIVE_PRIVATE.storage_set = _storage_set_emu;
    TXLIVE_PRIVATE.storage_get = _storage_get_emu;
    try {
        if (window.localStorage && window.localStorage.setItem) {
            window.localStorage.setItem("txlive", "1");
            TXLIVE_PRIVATE.storage_set = _storage_set_localStorage;
            TXLIVE_PRIVATE.storage_get = _storage_get_localStorage;
            TXLIVE.settings.has_storage = true
        }
    } catch (err$15) {
        try {
            if (window.sessionStorage && window.sessionStorage.setItem) {
                window.sessionStorage.setItem("txlive", "1");
                TXLIVE_PRIVATE.storage_set = _storage_set_sessionStorage;
                TXLIVE_PRIVATE.storage_get = _storage_get_sessionStorage;
                TXLIVE.settings.has_storage = true
            }
        } catch (err) {}
    }
    var last_picker_setup = null;

    function setupPicker() {
        if (last_picker_setup === TXLIVE.settings.picker) return;
        if (!TXLIVE.settings.picker) return;
        var picker = TXLIVE.settings.picker.trim();
        if (!picker.length) return;
        last_picker_setup = picker;
        TXLIVE.dynamicPageOff();
        TXLIVE_PRIVATE.addPicker(picker);
        TXLIVE.dynamicPageOn()
    }
    var added_picker_css = false;
    TXLIVE_PRIVATE.addPicker = function(picker) {
        if (!added_picker_css) {
            added_picker_css = true;
            try {
                var css = ".txlive-langselector { position:fixed;z-index:999999;min-width: 120px;line-height:32px;background-color:#fcfcfc;box-shadow: 0 0 0px #CCD6E4;color: #3c5675;font-size: 14px;font-family: inherit; }";
                css += ".txlive-langselector * { margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;border-radius: 0;-moz-border-radius:0;-webkit-border-radius:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-border-radius:0;opacity:1; }";
                css += ".txlive-langselector.txlive-langselector-topleft { top:0;left:0;right:auto;bottom:auto;border-radius: 0 0 2px 0;-moz-border-radius: 0 0 2px 0;-webkit-border-radius: 0 0 2px 0; }";
                css += ".txlive-langselector.txlive-langselector-topright { top:0;left:auto;right:0;bottom:auto;border-radius: 0 2px 0 0;-moz-border-radius: 0 2px 0 0;-webkit-border-radius: 0 2px 0 0; }";
                css += ".txlive-langselector.txlive-langselector-bottomleft { top:auto;left:0;right:auto;bottom:0;border-radius: 0 2px 0 0;-moz-border-radius: 0 2px 0 0;-webkit-border-radius: 0 2px 0 0; }";
                css += ".txlive-langselector.txlive-langselector-bottomright { top:auto;left:auto;right:0;bottom:0;border-radius: 2px 0 0 0;-moz-border-radius: 2px 0 0 0;-webkit-border-radius: 2px 0 0 0; }";
                css += ".txlive-langselector .txlive-langselector-toggle { overflow: hidden;display: block;padding:2px 16px;width: 100%;height:36px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-topleft .txlive-langselector-toggle { overflow: hidden;display: block;border-top:2px solid #CCD6E4;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-topright .txlive-langselector-toggle { overflow: hidden;display: block;border-top:2px solid #CCD6E4;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-bottomleft .txlive-langselector-toggle { overflow: hidden;display: block;border-bottom:2px solid #CCD6E4;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector.txlive-langselector-bottomright .txlive-langselector-toggle { overflow: hidden;display: block;border:2px solid #CCD6E4;border-radius: 6px;padding:2px 16px;height:36px;line-height:32px;cursor:pointer;cursor:hand; }";
                css += ".txlive-langselector .txlive-langselector-current { float: left;padding: 0;max-width: 200px;overflow:hidden;white-space: nowrap;text-overflow:ellipsis; }";
                css += ".txlive-langselector .txlive-langselector-marker { float: right;display: block;position:relative;width:0;height:0;margin-left:8px;margin-top: 13px;border-right:4px dashed transparent;border-left:4px dashed transparent;}";
                css += ".txlive-langselector-topright .txlive-langselector-marker,";
                css += ".txlive-langselector-topleft .txlive-langselector-marker {border-top:4px solid #fff;}";
                css += ".txlive-langselector-bottomright .txlive-langselector-marker,";
                css += ".txlive-langselector-bottomleft .txlive-langselector-marker {border-bottom:4px solid #3c5675;}";
                css += ".txlive-langselector-list { position:absolute;width: 100%;margin:0;padding:10px 0;display:none;background-color:#EFF2F6;box-shadow: 0 0 0px #CCD6E4;color:#666;list-style-type:none; }";
                css += ".txlive-langselector-list.txlive-langselector-list-opened { display:block; }";
                css += ".txlive-langselector-list > li {padding:0 16px;width:100%;overflow:hidden;white-space: nowrap;text-overflow:ellipsis;}";
                css += ".txlive-langselector-list > li:hover {background-color:#31A3DD;color:#fff;cursor:pointer;cursor:hand;}";
                css += ".txlive-langselector-topright > .txlive-langselector-list {top:40px;left:auto;right:0;bottom:auto;border-bottom: 1px solid #f4f7f9;}";
                css += ".txlive-langselector-topleft > .txlive-langselector-list {top:40px;left:0;right:auto;bottom:auto;border-bottom: 1px solid #f4f7f9;}";
                css += ".txlive-langselector-bottomright > .txlive-langselector-list {top:auto;left:auto;right:0;bottom:40px;border-top: 2px solid #CCD6E4;border-bottom: 2px solid #CCD6E4;border-left: 2px solid #CCD6E4;}";
                css += ".txlive-langselector-bottomleft > .txlive-langselector-list {top:auto;left:0;right:auto;bottom:40px;border-top: 1px solid #f4f7f9;}";
                css += ".txlive-langselector-topright > .txlive-langselector-list,";
                css += ".txlive-langselector-bottomright > .txlive-langselector-list {border-radius: 6px 0 0 6px;-moz-border-radius: 6px 0 0 6px;-webkit-border-radius: 6px 0 0 6px;}";
                css += ".txlive-langselector-topleft > .txlive-langselector-list,";
                css += ".txlive-langselector-bottomleft > .txlive-langselector-list {border-radius: 0 2px 2px 0;-moz-border-radius: 0 2px 2px 0;-webkit-border-radius: 0 2px 2px 0;}";
                var head = document.head || document.getElementsByTagName("head")[0];
                var style = document.createElement("style");
                style.type = "text/css";
                if (style.styleSheet) style.styleSheet.cssText = css;
                else style.appendChild(document.createTextNode(css));
                head.appendChild(style)
            } catch (err$16) {
                TXLIVE.logger.error(err$16)
            }
        }
        try {
            var pick_lang = function(element) {
                close_picker();
                if (element && element.getAttribute) {
                    lang = element.getAttribute("data-value");
                    lang && TXLIVE.translateTo(lang)
                }
            };
            var close_picker = function() {
                var toggler = document.getElementById("tx-live-lang-picker");
                if (toggler) toggler.className = toggler.className.replace(open_class, "")
            };
            var open_picker = function() {
                var toggler = document.getElementById("tx-live-lang-picker");
                if (toggler) toggler.className += " " + open_class
            };
            var is_picker_open = function() {
                var toggler = document.getElementById("tx-live-lang-picker");
                return toggler && toggler.className.indexOf(open_class) >= 0
            };
            var html = '<ul id="tx-live-lang-picker" class="txlive-langselector-list notranslate">';
            for (var i = 0; i < TXLIVE.denormalized_languages.length; ++i) {
                var l = TXLIVE.denormalized_languages[i];
                html += '<li data-value="' + l.code + '">' + l.name + "</li>"
            }
            html += "</ul>";
            html += '<div class="txlive-langselector-toggle notranslate" id="tx-live-lang-toggle"><span class="txlive-langselector-current" id="tx-live-lang-current">' + TXLIVE.languages.source.name + "</span>";
            html += '<span class="txlive-langselector-marker"></span></div>';
            if (picker[0] === "#") {
                var elem = document.getElementById(picker.substr(1));
                if (!elem) return;
                elem.innerHTML = html;
                TXLIVE.analytics.submitEvent("picker_position", 1, "element")
            } else {
                var div =
                    document.getElementById("tx-live-lang-container");
                if (!div) {
                    div = document.createElement("div");
                    div.id = "tx-live-lang-container"
                }
                var csstext = "txlive-langselector";
                switch (picker.toLowerCase()) {
                    case "top-left":
                        csstext += " txlive-langselector-topleft";
                        break;
                    case "top-right":
                        csstext += " txlive-langselector-topright";
                        break;
                    case "bottom-left":
                        csstext += " txlive-langselector-bottomleft";
                        break;
                    case "bottom-right":
                        csstext += " txlive-langselector-bottomright";
                        break;
                    default:
                        return
                }
                TXLIVE.analytics.submitEvent("picker_position",
                    1, picker.toLowerCase());
                div.className = csstext;
                div.innerHTML = html;
                document.body.appendChild(div)
            }
            if (TXLIVE.selected_lang) {
                var langname = TXLIVE.getLanguageName(TXLIVE.selected_lang);
                var nameelem = document.getElementById("tx-live-lang-current");
                if (langname && nameelem) nameelem.innerHTML = langname
            }
            var el = document.getElementById("tx-live-lang-toggle");
            var open_class = "txlive-langselector-list-opened";
            if (el) TXLIVE_PRIVATE.bindClick(el, function() {
                is_picker_open() ? close_picker() : open_picker()
            });
            el = document.getElementById("tx-live-lang-picker");
            if (el) {
                el = el.getElementsByTagName("li") || [];
                for (var i = 0; i < el.length; ++i) TXLIVE_PRIVATE.bindClick(el[i], pick_lang)
            }
        } catch (err$17) {
            TXLIVE.logger.error(err$17)
        }
    };
    var LOCQUANT_TYPES = ["currency", "number", "date"];
    var LOCQUANT_CURRENT_LANGCODE = "";
    TXLIVE_PRIVATE.parse_locquant_string = function(lstring) {
        var ret = {};
        var re = /#([\s\S])#*0([\s\S])0/;
        var markers = re.exec(lstring);
        ret.group = markers[1];
        ret.decimal = markers[2];
        ret.currency_on_the_left = lstring.indexOf("\u00a4") == 0;
        if (ret.currency_on_the_left) ret.cspace =
            /\u00a4(\s*)#/.exec(lstring)[1];
        else ret.cspace = /0(\s*)\u00a4/.exec(lstring)[1];
        return ret
    };
    TXLIVE_PRIVATE.LOCQUANT_LOCALE = {
        ja: "\u00a4#,##0.00",
        zh: "\u00a4 #,##0.00",
        ko: "\u00a4#,##0.00",
        de: "#.##0,00 \u00a4",
        fr: "# ##0,00 \u00a4",
        en: "\u00a4#.##0,00",
        ar: "#,##0.00 \u00a4",
        hi: "\u00a4#,##0.00",
        es: "#.##0,00 \u00a4",
        es_mx: "\u00a4#,##0.00",
        pt: "\u00a4#.##0,00",
        sv: "# ##0,00 \u00a4",
        fi: "# ##0,00 \u00a4",
        it: "#.##0,00 \u00a4",
        nl: "\u00a4 #.##0,00",
        da: "#.##0,00 \u00a4",
        el: "#.##0,00 \u00a4",
        zu: "\u00a4#,##0.00",
        af: "\u00a4# ##0,00",
        ru: "# ##0,00 \u00a4",
        bn: "#,##0.00\u00a4",
        pa: "\u00a4 #,##0.00",
        te: "\u00a4#,##0.00",
        vi: "#.##0,00 \u00a4",
        mr: "\u00a4#,##0.00",
        ta: "\u00a4 #,##0.00",
        th: "\u00a4#,##0.00",
        tr: "#.##0,00 \u00a4"
    };
    for (var i in TXLIVE_PRIVATE.LOCQUANT_LOCALE) TXLIVE_PRIVATE.LOCQUANT_LOCALE[i] = TXLIVE_PRIVATE.parse_locquant_string(TXLIVE_PRIVATE.LOCQUANT_LOCALE[i]);
    TXLIVE_PRIVATE.get_locale_spec = function(langcode) {
        langcode = langcode.toLowerCase().replace("-", "_");
        return TXLIVE_PRIVATE.LOCQUANT_LOCALE[langcode] || TXLIVE_PRIVATE.LOCQUANT_LOCALE[langcode.substr(0,
            2)]
    };
    var _parseDecimal = function(value, format) {
        var decimal, fractionPart, integerPart, number, pattern, result, thousands;
        thousands = format[0];
        decimal = format[1];
        if (thousands == " ") {
            thousands = "";
            value = value.replace(/\s/g, "").replace(decimal, ".");
            return parseFloat(value)
        }
        pattern = new RegExp("^\\s*((?:\\d{1,3}(?:\\" + thousands + "\\d{3})+)|\\d*)(?:\\" + decimal + "(\\d*))?\\s*$");
        result = value.match(pattern);
        if (!result || result.length !== 3) return NaN;
        integerPart = result[1].replace(new RegExp("\\" + thousands, "g"), "");
        fractionPart =
            result[2];
        number = parseFloat("" + integerPart + "." + fractionPart);
        return number
    };
    var _formatNumber = function(number, delimiter, decimalDelimiter) {
        var numberString = number.toString(),
            splitNumber = numberString.split("."),
            splitFloats = "";
        if (splitNumber[1]) splitFloats = decimalDelimiter + splitNumber[1];
        return splitNumber[0].split(/(?=(?:\d{3})+$)/g).join(delimiter) + splitFloats
    };
    TXLIVE_PRIVATE.parseDecimal = function(value, format) {
        if (format) return _parseDecimal(value, format);
        var sourcelang_code = TXLIVE.getSourceLanguageCode() ||
            "en";
        var spec = TXLIVE_PRIVATE.get_locale_spec(sourcelang_code);
        if (!spec) {
            var ret = _parseDecimal(value, ".,");
            return !isNaN(ret) ? ret : _parseDecimal(value, ",.")
        }
        return _parseDecimal(value, spec.group + spec.decimal)
    };
    TXLIVE_PRIVATE.is_locquant = function(node) {
        var type = node.getAttribute("tx-content");
        if (!type || !node.innerHTML) return false;
        type = type.trim().toLowerCase();
        if (LOCQUANT_TYPES.indexOf(type) < 0) return false;
        return type
    };
    TXLIVE_PRIVATE.process_locquant = function(node) {
        var type = TXLIVE_PRIVATE.is_locquant(node);
        if (!type) return;
        TXLIVE.locquant_segment_list.push({
            node: node,
            type: type,
            format: node.getAttribute("tx-format"),
            source_string: node.innerHTML
        });
        return true
    };
    TXLIVE_PRIVATE.localize_locquant = function(type, text, format) {
        if (LOCQUANT_CURRENT_LANGCODE == TXLIVE.getSourceLanguageCode()) return text;
        return TXLIVE_PRIVATE["localize_locquant_" + type](LOCQUANT_CURRENT_LANGCODE, text, format)
    };
    TXLIVE_PRIVATE.localize_locquant_number = function(langcode, text, format) {
        var spec = TXLIVE_PRIVATE.get_locale_spec(langcode);
        var cnumber =
            text.replace(/[A-Za-z]/g, "");
        var csymbol = text.replace(cnumber, "").replace(" ", "");
        cnumber = TXLIVE_PRIVATE.parseDecimal(cnumber, format);
        if (!spec || isNaN(cnumber)) return text;
        cnumber = _formatNumber(cnumber, spec.group, spec.decimal);
        return spec.unit_on_the_left ? csymbol + cnumber : cnumber + csymbol
    };
    TXLIVE_PRIVATE.localize_locquant_currency = function(langcode, text, format) {
        var spec = TXLIVE_PRIVATE.get_locale_spec(langcode);
        var csymbol = text.replace(/[\d\s]/g, "").replace(",", "").replace(".", "");
        var cnumber = text.replace(csymbol,
            "").trim();
        cnumber = TXLIVE_PRIVATE.parseDecimal(cnumber, format);
        if (!spec || isNaN(cnumber)) return text;
        cnumber = _formatNumber(cnumber, spec.group, spec.decimal);
        return spec.currency_on_the_left ? csymbol + spec.cspace + cnumber : cnumber + spec.cspace + csymbol
    };
    TXLIVE_PRIVATE.localize_locquant_date = function(langcode, text) {
        return text
    };
    TXLIVE_PRIVATE.escape_regex = function(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
    };
    TXLIVE_PRIVATE.ignorePath = function(filters, path) {
        if (!filters || !path) return false;
        var i = filters.length;
        while (i--)
            if (filters[i].action == "ignore") {
                var filter = TXLIVE_PRIVATE._filterToRegexp(filters[i]);
                var check = filter.neg ? !filter.re.test(path) : filter.re.test(path);
                if (check) return true
            }
        return false
    };
    TXLIVE_PRIVATE._filterToRegexp = function(filter) {
        var re = /^not_/;
        var neg = re.test(filter.match);
        var action = filter.match.replace("not_", "").replace("with", "").trim();
        var path = TXLIVE_PRIVATE.escape_regex(filter.path);
        switch (action) {
            case "starts":
                re = "^" + path;
                break;
            case "ends":
                re = path + "$";
                break;
            case "contains":
                re = path;
                break;
            case "equals":
                re = "^" + path + "$";
                break
        }
        return {
            re: new RegExp(re),
            neg: neg
        }
    };
    var PARSER_OPTIONS = {
        DEFAULT: 1 << 2,
        DO_NOT_COLLECT: 1 << 1,
        URLS_AS_VARS: 1 << 2,
        set: function(value, option) {
            return value | option
        },
        unset: function(value, option) {
            return value & ~option
        },
        isset: function(value, option) {
            return value & option
        },
        isunset: function(value, option) {
            return !(value & option)
        }
    };
    var SKIP_TAGS = {
        SCRIPT: true,
        STYLE: true,
        LINK: true,
        IFRAME: true,
        NOSCRIPT: true,
        CANVAS: true,
        SVG: true,
        svg: true,
        AUDIO: true,
        VIDEO: true,
        CODE: true,
        TIME: true,
        VAR: true,
        KBD: true
    };
    var SKIP_CLASS = {
        "notranslate": true,
        "txlive-meta": true,
        "facebook_container": true,
        "twitter_container": true
    };
    var SKIP_TAGS_USER = {},
        SKIP_CLASS_USER = {};
    var BLOCK_NODES = {
        ADDRESS: true,
        FIGCAPTION: true,
        OL: true,
        ARTICLE: true,
        FIGURE: true,
        OUTPUT: true,
        ASIDE: true,
        FOOTER: true,
        P: true,
        FORM: true,
        PRE: true,
        BLOCKQUOTE: true,
        H1: true,
        H2: true,
        H3: true,
        H4: true,
        H5: true,
        H6: true,
        AUDIO: true,
        CANVAS: true,
        SECTION: true,
        HEADER: true,
        TABLE: true,
        DD: true,
        HGROUP: true,
        TFOOT: true,
        DIV: true,
        HR: true,
        UL: true,
        DL: true,
        VIDEO: true,
        FIELDSET: true,
        NOSCRIPT: true
    };
    var NEW_SEGMENTS_LIST = null;
    var NEW_SEGMENTS_DICT = null;

    function isBlockElement(node) {
        return node.nodeType === 1 && BLOCK_NODES[node.tagName] === true
    }

    function isInlineElement(node) {
        return node.nodeType === 1 && BLOCK_NODES[node.tagName] !== true
    }

    function isTextElement(node) {
        return node.nodeType === 3
    }

    function isSkipTag(tagName) {
        return tagName && (SKIP_TAGS[tagName] || SKIP_TAGS_USER[tagName])
    }

    function isSkipClass(className) {
        if (!className || !isString(className)) return false;
        var cls_array = className.toLowerCase().match(/\S+/g);
        if (!cls_array) return false;
        var i = cls_array.length;
        while (i--)
            if (SKIP_CLASS[cls_array[i]] || SKIP_CLASS_USER[cls_array[i]]) return true;
        return false
    }

    function SET_TEXT(item, text) {
        text = decodeString(text);
        item.node.nodeValue = item.head + text + item.tail
    }

    function GET_TEXT(item) {
        return item.node.nodeValue
    }

    function SET_FRAGMENT(item, text) {
        text = decodeString(text);
        for (var i = 0; i < item.block_args.length; ++i) {
            var arg = item.block_args[i];
            if (arg.type === "VAR") text = text.replace("{{" +
                i + "}}", arg.html);
            else if (arg.type === "LQ") text = text.replace("{{" + i + "}}", TXLIVE_PRIVATE.localize_locquant(arg.ltype, arg.inner, arg.format))
        }
        var node = item.snode_before ? item.snode_before.nextSibling : item.snode_after.parentNode.firstChild;
        while (node && node != item.snode_after) {
            var to_delete = node;
            node = node.nextSibling;
            to_delete.parentNode.removeChild(to_delete)
        }
        var tmp = document.createElement("div");
        tmp.innerHTML = item.head + text + item.tail;
        var frag = document.createDocumentFragment();
        var child;
        while (child = tmp.firstChild) frag.appendChild(child);
        (item.snode_before || item.snode_after).parentNode.insertBefore(frag, item.snode_after)
    }

    function GET_FRAGMENT(item) {
        var node = item.snode_before ? item.snode_before.nextSibling : item.snode_after.parentNode.firstChild;
        var tmp = document.createElement("div");
        while (node && node != item.snode_after) {
            tmp.appendChild(node.cloneNode(true));
            node = node.nextSibling
        }
        return tmp.innerHTML
    }

    function SET_BLOCK(item, text) {
        text = decodeString(text);
        for (var i = 0; i < item.block_args.length; ++i) {
            var arg = item.block_args[i];
            if (arg.type ===
                "VAR") text = text.replace("{{" + i + "}}", arg.html);
            else if (arg.type === "LQ") text = text.replace("{{" + i + "}}", TXLIVE_PRIVATE.localize_locquant(arg.ltype, arg.inner, arg.format))
        }
        item.node.innerHTML = item.head + text + item.tail
    }

    function GET_BLOCK(item, text) {
        return item.node.innerHTML
    }

    function SET_ATTR(item, text) {
        text = decodeString(text);
        item.node.setAttribute(item.attribute, item.head + text + item.tail)
    }

    function GET_ATTR(item) {
        return item.node.getAttribute(item.attribute)
    }

    function PARSE_ARGS(node, args) {
        if (node) {
            do
                if (node.nodeType ===
                    1) {
                    var ltype = TXLIVE_PRIVATE.is_locquant(node);
                    if (ltype || isSkipTag(node.tagName) || isSkipClass(node.className)) {
                        var outerhtml = node.outerHTML;
                        if (outerhtml)
                            if (ltype) args.push({
                                type: "LQ",
                                html: outerhtml,
                                inner: node.innerHTML,
                                ltype: ltype,
                                format: node.getAttribute("tx-format")
                            });
                            else args.push({
                                type: "VAR",
                                html: outerhtml
                            })
                    } else PARSE_ARGS(node.firstChild, args)
                }
            while (node = node.nextSibling)
        }
    }

    function PARSE_VARIABLES(text, node, args, options) {
        PARSE_ARGS(node.firstChild, args);
        for (var i = 0; i < args.length; ++i)
            if (args[i].type ===
                "VAR" || args[i].type === "LQ") text = text.replace(args[i].html, "{{" + i + "}}");
        if (PARSER_OPTIONS.isset(options, PARSER_OPTIONS.URLS_AS_VARS) && /\s(src|href)/i.test(text)) {
            var match, regex = /(<a[^>]*href\s*=\s*)("[^"]*"|'[^']*')|(<img[^>]*src\s*=\s*)("[^"]*"|'[^']*')/ig;
            var result = "",
                lastIndex = 0;
            while (match = regex.exec(text)) {
                result += text.substring(lastIndex, match.index);
                if (match[2]) {
                    result += match[1] + match[2][0] + "{{" + args.length + "}}" + match[2][0];
                    args.push({
                        type: "VAR",
                        html: match[2].substring(1, match[2].length - 1)
                    })
                } else {
                    result +=
                        match[3] + match[4][0] + "{{" + args.length + "}}" + match[4][0];
                    args.push({
                        type: "VAR",
                        html: match[4].substring(1, match[4].length - 1)
                    })
                }
                lastIndex = regex.lastIndex
            }
            result += text.substring(lastIndex, text.length);
            text = result
        }
        return text
    }

    function CRAWL_FRAGMENT(snode_before, snode_after, tags, options) {
        if ((!snode_before || snode_before && snode_before.txbefore_detected === true) && (!snode_after || snode_after && snode_after.txafter_detected === true)) return;
        try {
            if (snode_before) snode_before.txbefore_detected = true;
            if (snode_after) snode_after.txafter_detected =
                true
        } catch (err$18) {}
        var node = document.createElement("div");
        var next = snode_before ? snode_before.nextSibling : snode_after.parentNode.firstChild;
        while (next && next != snode_after) {
            node.appendChild(next.cloneNode(true));
            next = next.nextSibling
        }
        var raw_text = node.innerHTML;
        var text = TXLIVE_PRIVATE.stripWhitespace(raw_text);
        if (!text) return;
        var args = [];
        text = PARSE_VARIABLES(text, node, args, options);
        var key = TXLIVE_PRIVATE.md5(text);
        var segments = TXLIVE.segments;
        var segment_list = TXLIVE.segment_list;
        var segment = segments[key];
        if (!segment) {
            segment = {
                key: key,
                source_string: text,
                tags: [],
                elements: []
            };
            segments[key] = segment;
            segment_list.push(segment)
        }
        if (tags.length) mergeArrays(segment.tags, tags);
        segment.elements.push({
            segment: segment,
            pnode: (snode_before || snode_after).parentNode,
            snode_before: snode_before,
            snode_after: snode_after,
            set: SET_FRAGMENT,
            get: GET_FRAGMENT,
            block_args: args,
            head: raw_text.indexOf(" ") == 0 ? " " : "",
            tail: raw_text.indexOf(" ", raw_text.length - 1) >= 0 ? " " : ""
        });
        if (NEW_SEGMENTS_LIST && !NEW_SEGMENTS_DICT[key]) {
            NEW_SEGMENTS_LIST.push(segment);
            NEW_SEGMENTS_DICT[key] = segment
        }
    }

    function CRAWL_BLOCK(node, tags, options) {
        if (node.txblock_detected === true) return;
        try {
            node.txblock_detected = true
        } catch (err$19) {}
        if (TXLIVE_PRIVATE.process_locquant(node)) return;
        var raw_text = node.innerHTML;
        var text = TXLIVE_PRIVATE.stripWhitespace(raw_text);
        if (!text || TXLIVE_PRIVATE.isNotTextual.test(text)) return;
        var args = [];
        text = PARSE_VARIABLES(text, node, args, options);
        var key = TXLIVE_PRIVATE.md5(text);
        var segments = TXLIVE.segments;
        var segment_list = TXLIVE.segment_list;
        var segment =
            segments[key];
        if (!segment) {
            segment = {
                key: key,
                source_string: text,
                tags: [],
                elements: []
            };
            segments[key] = segment;
            segment_list.push(segment)
        }
        if (tags.length) mergeArrays(segment.tags, tags);
        segment.elements.push({
            segment: segment,
            node: node,
            pnode: node,
            set: SET_BLOCK,
            get: GET_BLOCK,
            block_args: args,
            head: raw_text.indexOf(" ") == 0 ? " " : "",
            tail: raw_text.indexOf(" ", raw_text.length - 1) >= 0 ? " " : ""
        });
        try {
            node.txsegment = segment
        } catch (err$20) {}
        if (NEW_SEGMENTS_LIST && !NEW_SEGMENTS_DICT[key]) {
            NEW_SEGMENTS_LIST.push(segment);
            NEW_SEGMENTS_DICT[key] =
                segment
        }
    }

    function CRAWL_TEXT(node, tags) {
        if (node.txtext_detected === true) return;
        try {
            node.txtext_detected = true
        } catch (err$21) {}
        var raw_text = node.nodeValue;
        var text = TXLIVE_PRIVATE.stripWhitespace(raw_text);
        if (text && text.length && !TXLIVE_PRIVATE.isNotTextual.test(text)) {
            var key = TXLIVE_PRIVATE.md5(text);
            var segments = TXLIVE.segments;
            var segment_list = TXLIVE.segment_list;
            var segment = segments[key];
            if (!segment) {
                segment = {
                    key: key,
                    source_string: text,
                    tags: [],
                    elements: []
                };
                segments[key] = segment;
                segment_list.push(segment)
            }
            if (tags.length) mergeArrays(segment.tags,
                tags);
            segment.elements.push({
                segment: segment,
                node: node,
                pnode: node.parentNode,
                set: SET_TEXT,
                get: GET_TEXT,
                head: raw_text.indexOf(" ") == 0 ? " " : "",
                tail: raw_text.indexOf(" ", raw_text.length - 1) >= 0 ? " " : ""
            });
            try {
                node.txsegment = segment
            } catch (err$22) {}
            if (NEW_SEGMENTS_LIST && !NEW_SEGMENTS_DICT[key]) {
                NEW_SEGMENTS_LIST.push(segment);
                NEW_SEGMENTS_DICT[key] = segment
            }
        }
    }

    function CRAWL_ATTR(node, attr, tags) {
        var raw_text = node.getAttribute(attr) || "";
        var text = TXLIVE_PRIVATE.stripWhitespace(raw_text);
        if (text && text.length && !TXLIVE_PRIVATE.isNotTextual.test(text)) {
            var key =
                TXLIVE_PRIVATE.md5(text);
            var segments = TXLIVE.segments;
            var segment_list = TXLIVE.segment_list;
            var segment = segments[key];
            if (!segment) {
                segment = {
                    key: key,
                    source_string: text,
                    tags: [],
                    elements: []
                };
                segments[key] = segment;
                segment_list.push(segment)
            }
            if (tags.length) mergeArrays(segment.tags, tags);
            segment.elements.push({
                segment: segment,
                node: node,
                pnode: node.parentNode,
                set: SET_ATTR,
                get: GET_ATTR,
                attribute: attr,
                head: raw_text.indexOf(" ") == 0 ? " " : "",
                tail: raw_text.indexOf(" ", raw_text.length - 1) >= 0 ? " " : ""
            });
            try {
                node.txsegment =
                    segment
            } catch (err$23) {}
            if (NEW_SEGMENTS_LIST && !NEW_SEGMENTS_DICT[key]) {
                NEW_SEGMENTS_LIST.push(segment);
                NEW_SEGMENTS_DICT[key] = segment
            }
        }
    }

    function DETECT_i18n_ATTR(node, options) {
        var list = [];
        switch (node.tagName) {
            case "A":
                list.push("title");
                if (PARSER_OPTIONS.isunset(options, PARSER_OPTIONS.URLS_AS_VARS)) list.push("href");
                break;
            case "IMG":
                list.push("title");
                list.push("alt");
                if (PARSER_OPTIONS.isunset(options, PARSER_OPTIONS.URLS_AS_VARS)) list.push("src");
                break;
            case "META":
                var name = node.getAttribute("name");
                if (name) {
                    name = name.toLowerCase();
                    if (name === "keywords" || name === "description") list.push("content")
                }
                var social_tags = node.getAttribute("property");
                if (social_tags) {
                    social_tags = social_tags.toLowerCase();
                    if (social_tags === "og:title" || social_tags === "og:description") list.push("content")
                }
                break;
            case "INPUT":
                list.push("placeholder");
                var inputtype = node.getAttribute("type");
                if (inputtype) {
                    inputtype = inputtype.toLowerCase();
                    if (inputtype === "button" || inputtype === "reset" || inputtype === "submit") list.push("value")
                }
                break;
            case "TEXTAREA":
                list.push("placeholder");
                break
        }
        var custom_attr = node.getAttribute("tx-attrs");
        if (custom_attr && custom_attr.length) {
            custom_attr = custom_attr.split(",");
            var i = custom_attr.length;
            while (i--) {
                var a = custom_attr[i].trim().toLowerCase();
                if (a && list.indexOf(a) < 0) list.push(a)
            }
        }
        if (TXLIVE.settings.parse_attr) {
            var parse_attr = TXLIVE.settings.parse_attr;
            for (var i = 0; i < parse_attr.length; ++i) {
                var a = parse_attr[i];
                if (list.indexOf(a) < 0) list.push(a)
            }
        }
        return list
    }

    function PARSE_ATTR(node, tags, options) {
        if (node.txattr_detected ===
            true) return;
        try {
            node.txattr_detected = true
        } catch (err$24) {}
        var attrs = DETECT_i18n_ATTR(node, options);
        for (var i = 0; i < attrs.length; ++i) CRAWL_ATTR(node, attrs[i], tags)
    }

    function IS_IN_DOCUMENT(node) {
        while (node = node.parentNode)
            if (node === document) return true;
        return false
    }

    function IS_SKIP_PARENT(node) {
        while (node) {
            if (node.nodeType === 1) {
                if (isSkipTag(node.tagName) || isSkipClass(node.className)) return true;
                var content_attr = node.getAttribute("tx-content");
                if (content_attr && content_attr.length) {
                    content_attr = content_attr.toLowerCase();
                    if (/\bexclude\b/.test(content_attr)) return true
                }
            }
            node = node.parentNode
        }
        return false
    }

    function PARSE_DOM(node, parent_tags, options) {
        if (node)
            if (!isSkipTag(node.tagName))
                if (node.nodeType === 3) PARSER_OPTIONS.isunset(options, PARSER_OPTIONS.DO_NOT_COLLECT) && CRAWL_TEXT(node, parent_tags);
                else if (node.nodeType === 1 && !isSkipClass(node.className)) {
            var tags = parent_tags;
            var tag_attr = node.getAttribute("tx-tags");
            if (tag_attr && tag_attr.length) {
                tags = parent_tags.slice(0);
                tag_attr = tag_attr.split(",");
                var i = tag_attr.length;
                while (i--) {
                    var a = tag_attr[i].trim().toLowerCase();
                    if (a && a.length && tags.indexOf(a) < 0) tags.push(a)
                }
            }
            var content_attr = node.getAttribute("tx-content");
            var is_block = false;
            var _options = options;
            if (content_attr && content_attr.length) {
                content_attr = content_attr.toLowerCase();
                if (/\bexclude\b/.test(content_attr)) _options = PARSER_OPTIONS.set(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
                else if (/\binclude\b/.test(content_attr)) _options = PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
                else if (/\bblock\b/.test(content_attr)) {
                    _options =
                        PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
                    is_block = true
                }
                if (/\bnotranslate_urls\b/.test(content_attr)) _options = PARSER_OPTIONS.set(_options, PARSER_OPTIONS.URLS_AS_VARS);
                else if (/\btranslate_urls\b/.test(content_attr)) _options = PARSER_OPTIONS.unset(_options, PARSER_OPTIONS.URLS_AS_VARS)
            }
            var _collect = PARSER_OPTIONS.isunset(_options, PARSER_OPTIONS.DO_NOT_COLLECT);
            _collect && PARSE_ATTR(node, tags, _options);
            if (!is_block && node.childNodes.length) {
                var all_text_nodes = true;
                for (var i = node.childNodes.length -
                        1; i >= 0; --i)
                    if (node.childNodes[i].nodeType !== 3) {
                        all_text_nodes = false;
                        break
                    }
                if (all_text_nodes) is_block = true
            }
            if (is_block) _collect && CRAWL_BLOCK(node, tags, _options);
            else {
                var childnode = node.firstChild;
                while (childnode)
                    if (isBlockElement(childnode)) {
                        PARSE_DOM(childnode, tags, _options);
                        childnode = childnode.nextSibling
                    } else {
                        var nextnode = childnode.nextSibling;
                        if (!nextnode || nextnode && isBlockElement(nextnode)) {
                            PARSE_DOM(childnode, tags, _options);
                            childnode = childnode.nextSibling
                        } else {
                            var snode_before = childnode.previousSibling;
                            var snode_after = null;
                            var snode = childnode;
                            var has_text = false;
                            while (snode) {
                                if (isTextElement(snode) && snode.nodeValue && snode.nodeValue.trim().length) has_text = true;
                                else if (isBlockElement(snode)) {
                                    snode_after = snode;
                                    break
                                }
                                snode = snode.nextSibling
                            }
                            if (!has_text)
                                while (childnode && childnode != snode_after) {
                                    PARSE_DOM(childnode, tags, _options);
                                    childnode = childnode.nextSibling
                                } else if (snode_before || snode_after) {
                                    _collect && CRAWL_FRAGMENT(snode_before, snode_after, tags, _options);
                                    childnode = snode_after
                                } else {
                                    _collect && CRAWL_BLOCK(node,
                                        tags, _options);
                                    childnode = null
                                }
                        }
                    }
            }
        }
    }

    function REMOVE_NODE(node) {
        if (!node) return;
        if (node.txsegment) {
            var elements = node.txsegment.elements;
            var j = elements.length;
            while (j--) {
                var item = elements[j];
                if (item.node == node) removeFromArray(elements, item)
            }
        }
        CLEAR_FLAGS_DOM(node)
    }

    function CLEAR_FLAGS_DOM(node, children) {
        if (!node) return;
        try {
            if (node.txbefore_detected) delete node.txbefore_detected;
            if (node.txafter_detected) delete node.txafter_detected;
            if (node.txblock_detected) delete node.txblock_detected;
            if (node.txtext_detected) delete node.txtext_detected;
            if (node.txattr_detected) delete node.txattr_detected;
            if (node.txsegment) delete node.txsegment
        } catch (err$25) {}
        if (children) {
            node = node.firstChild;
            while (node) {
                CLEAR_FLAGS_DOM(node, children);
                node = node.nextSibling
            }
        }
    }
    var LOCAL_TRANSLATION_STORAGE = {};
    var LAST_TRANSLATION_JSON = null;
    var LAST_TRANSLATION_LANG = null;
    TXLIVE.setLocale = function(langcode) {
        if (!langcode) return;
        try {
            document.getElementsByTagName("html")[0].setAttribute("lang", langcode.toLowerCase().replace("_", "-"))
        } catch (err$26) {
            TXLIVE.logger.error(err$26)
        }
    };

    function resetSegments(langcode) {
        LOCQUANT_CURRENT_LANGCODE = langcode;
        TXLIVE.dynamicPageOff();
        callFunctionArray(TXLIVE.__onbeforetranslate);
        var segments = TXLIVE.segments;
        for (var key in segments) {
            var s = segments[key];
            var j = s.elements.length;
            while (j--) {
                var item = s.elements[j];
                try {
                    item.set(item, s.source_string)
                } catch (err$27) {}
            }
            delete s.translation_string
        }
        var locquant_segment_list = TXLIVE.locquant_segment_list,
            index = locquant_segment_list.length;
        while (index--) {
            var s = locquant_segment_list[index];
            s.node.innerHTML =
                s.source_string
        }
        TXLIVE.setLocale(langcode);
        LAST_TRANSLATION_JSON = null;
        LAST_TRANSLATION_LANG = null;
        callFunctionArray(TXLIVE.__onaftertranslate);
        callFunctionArray(TXLIVE.__ontranslatepage, langcode);
        TXLIVE.dynamicPageOn()
    }

    function translateSegments(langcode, json) {
        LOCQUANT_CURRENT_LANGCODE = langcode;
        TXLIVE.dynamicPageOff();
        callFunctionArray(TXLIVE.__onbeforetranslate);
        var segments = TXLIVE.segments;
        for (var key in segments) {
            var s = segments[key];
            var string = json[key] || s.source_string;
            var j = s.elements.length;
            while (j--) {
                var item = s.elements[j];
                try {
                    item.set(item, string)
                } catch (err$28) {
                    s.elements.splice(j, 1)
                }
            }
            s.translation_string = string
        }
        var locquant_segment_list = TXLIVE.locquant_segment_list,
            index = locquant_segment_list.length;
        while (index--) {
            var s = locquant_segment_list[index];
            s.node.innerHTML = TXLIVE_PRIVATE.localize_locquant(s.type, s.source_string, s.format)
        }
        TXLIVE.setLocale(langcode);
        LAST_TRANSLATION_JSON = json;
        LAST_TRANSLATION_LANG = langcode;
        callFunctionArray(TXLIVE.__onaftertranslate);
        callFunctionArray(TXLIVE.__ontranslatepage,
            langcode);
        TXLIVE.dynamicPageOn()
    }
    var autocollect_queue = [],
        autocollect_processing = false;

    function autocollectConsume() {
        if (!TXLIVE.autocollect_ready || !autocollect_queue.length || autocollect_processing) return;
        var entry = autocollect_queue.shift(),
            vault = entry.vault,
            json = entry.json;
        autocollect_processing = true;
        TXLIVE.analytics.stopwatch("start", "autocollect");
        TXLIVE.doCORSRequest(TXLIVE.autocollect_url, "POST", JSON.stringify(json), function() {
            autocollect_processing = false;
            var previous_vault = TXLIVE_PRIVATE.storage_get("txlive:vault") || {};
            for (var key in vault) previous_vault[key] = vault[key];
            TXLIVE_PRIVATE.storage_set("txlive:vault", previous_vault);
            TXLIVE.analytics.stopwatch("stop", "autocollect");
            autocollectConsume()
        }, function(err, status_code) {
            autocollect_processing = false;
            if (status_code !== 0 && status_code !== 404) TXLIVE.logger.error(err);
            autocollectConsume()
        })
    }

    function autoCollect(custom_segments) {
        if (TXLIVE_PRIVATE.extractDomain(TXLIVE.settings.domain) !== TXLIVE_PRIVATE.extractDomain(TXLIVE_PRIVATE.getWindowLocation().href) || TXLIVE_SIDEBAR.loaded ||
            !TXLIVE.settings.has_storage || !TXLIVE.settings.autocollect || TXLIVE.settings.autocollected && !custom_segments) return;
        TXLIVE.settings.autocollected = !custom_segments;
        try {
            var timestamp = Date.now(),
                vault = TXLIVE_PRIVATE.storage_get("txlive:vault") || {},
                segments = custom_segments || TXLIVE.segments,
                new_entities = {},
                refresh_ts = [],
                found = false,
                published_keys = LAST_TRANSLATION_JSON || {};
            for (var key in segments) {
                var s = segments[key];
                if (!s.source_string) continue;
                var collected = key in published_keys,
                    vault_entry = vault[key],
                    to_autocollect = false;
                if (!vault_entry) {
                    to_autocollect = true;
                    vault[key] = {
                        string: s.source_string,
                        tags: s.tags,
                        ts: timestamp
                    }
                } else if (timestamp - vault_entry.ts >= AUTOCOLLECT_EXPIRE_MSEC) {
                    to_autocollect = true;
                    vault_entry.ts = timestamp
                }
                if (to_autocollect) {
                    found = true;
                    if (collected) refresh_ts.push(key);
                    else new_entities[key] = {
                        string: s.source_string,
                        tags: s.tags
                    }
                }
            }
            if (!found) return;
            var json = {
                apikey: TXLIVE.settings.api_key,
                host: TXLIVE_PRIVATE.getWindowHost(),
                path: TXLIVE_PRIVATE.getWindowPath(),
                group: TXLIVE.group,
                staging: TXLIVE.settings.staging,
                lib_version: TXLIVE.lib_version,
                newstrings: new_entities,
                refresh_ts: refresh_ts
            };
            autocollect_queue.push({
                vault: vault,
                json: json
            });
            autocollectConsume()
        } catch (err$29) {
            TXLIVE.logger.error(err$29)
        }
    }
    var timer_mutation = null,
        mutation_nodes = [],
        observer = null,
        mutators_initialized = false,
        mutators_on = false;

    function __proc_mutations__() {
        timer_mutation = null;
        if (TXLIVE_PRIVATE.isGoogleTranslated()) {
            mutation_nodes = [];
            return
        }
        var node_list = [];
        for (var i = 0; i < mutation_nodes.length; ++i)
            if (IS_IN_DOCUMENT(mutation_nodes[i]))
                if (node_list.indexOf(mutation_nodes[i]) ==
                    -1) node_list.push(mutation_nodes[i]);
        mutation_nodes = [];
        if (node_list.length) TXLIVE.translateNodes(node_list)
    }

    function __dom_inserted_cb(e) {
        mutation_nodes.push(e.target);
        if (timer_mutation) clearTimeout(timer_mutation);
        timer_mutation = setTimeout(__proc_mutations__, 0)
    }

    function __dom_removed_cb(e) {
        REMOVE_NODE(e.target)
    }

    function __observer_inserted_cb(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target) {
                if (mutation.removedNodes.length)
                    for (var i = 0; i < mutation.removedNodes.length; ++i) REMOVE_NODE(mutation.removedNodes[i]);
                REMOVE_NODE(mutation.target);
                if (mutation.target.childNodes.length || mutation.type == "attributes") mutation_nodes.push(mutation.target)
            }
        });
        if (mutation_nodes.length) {
            if (timer_mutation) clearTimeout(timer_mutation);
            timer_mutation = setTimeout(__proc_mutations__, 0)
        }
    }
    TXLIVE.isDynamicPageOn = function() {
        return mutators_on
    };
    TXLIVE.dynamicPageOn = function() {
        if (!mutators_initialized || mutators_on) return;
        mutators_on = true;
        if (observer) observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ["value", "placeholder", "title"]
        });
        else {
            document.addEventListener("DOMNodeInserted", __dom_inserted_cb, false);
            document.addEventListener("DOMNodeRemoved", __dom_removed_cb, false)
        }
    };
    TXLIVE.dynamicPageOff = function() {
        if (!mutators_initialized || !mutators_on) return;
        mutators_on = false;
        if (observer) observer.disconnect();
        else {
            document.removeEventListener("DOMNodeInserted", __dom_inserted_cb);
            document.removeEventListener("DOMNodeRemoved", __dom_removed_cb)
        }
    };

    function __init_mutators__() {
        if (!TXLIVE.settings.dynamic) return;
        if (window.MutationObserver) observer = new MutationObserver(__observer_inserted_cb);
        mutators_initialized = true;
        TXLIVE.dynamicPageOn()
    }

    function __destroy_mutators__() {
        TXLIVE.dynamicPageOff();
        mutators_initialized = false;
        observer = null
    }
    TXLIVE.normalizeLangCode = function(langcode) {
        if (!langcode) return langcode;
        langcode = langcode.replace("-", "_");
        var extra = null;
        if (langcode.indexOf("@") >= 0) {
            var tokens = langcode.split("@");
            langcode = tokens[0];
            extra = tokens[1]
        }
        if (langcode.indexOf("_") >= 0) {
            var tokens = langcode.split("_"),
                lang = tokens[0].toLowerCase(),
                country = tokens[1].toUpperCase();
            langcode = lang + "_" + country
        } else langcode = langcode.toLowerCase();
        if (extra) langcode += "@" + extra;
        return langcode
    };
    TXLIVE.hasTargetLanguage = function(langcode) {
        if (!TXLIVE.languages) return false;
        var languages = TXLIVE.languages;
        for (var i = 0; i < languages.translation.length; ++i)
            if (languages.translation[i].code === langcode) return true;
        return false
    };
    TXLIVE.translateTo = function(langcode) {
        var bft_params = {
            lang_code: langcode,
            noop: false
        };
        callFunctionArray(TXLIVE.__onbeforetranslatepage,
            bft_params);
        if (bft_params.noop) return;
        try {
            if (!TXLIVE.languages) return;
            if (!langcode) {
                __ready__();
                return
            }
            var languages = TXLIVE.languages;
            if (TXLIVE.selected_lang === langcode)
                if (languages.source.code === langcode && !LAST_TRANSLATION_LANG || LAST_TRANSLATION_LANG && LAST_TRANSLATION_JSON && LAST_TRANSLATION_LANG === langcode) {
                    __ready__();
                    return
                }
            if (languages.source.code === langcode) {
                if (LAST_TRANSLATION_LANG) resetSegments(langcode);
                __ready__()
            } else {
                if (TXLIVE.settings && TXLIVE.settings.filters && TXLIVE_PRIVATE.ignorePath(TXLIVE.settings.filters,
                        window.location.pathname)) return __ready__();
                var lang_url = null;
                for (var i = 0; i < languages.translation.length; ++i)
                    if (languages.translation[i].code === langcode) {
                        lang_url = languages.translation[i].url;
                        break
                    }
                if (!lang_url && !LOCAL_TRANSLATION_STORAGE[langcode]) {
                    __ready__();
                    return
                }
                var key = langcode + "@" + languages.timestamp;
                var json = TXLIVE_PRIVATE.storage_get(key);
                if (!json) json = LOCAL_TRANSLATION_STORAGE[langcode];
                if (json) {
                    translateSegments(langcode, json);
                    __ready__()
                } else {
                    var lang_loaded = false;
                    window["transifex_lang_" +
                        TXLIVE_PRIVATE.escapeLanguageCode(langcode)] = function(data) {
                        lang_loaded = true;
                        TXLIVE_PRIVATE.storage_set(key, data);
                        if (langcode === TXLIVE.selected_lang) {
                            translateSegments(langcode, data);
                            __ready__()
                        }
                    };
                    TXLIVE.analytics.stopwatch("start", "translate_to_time");
                    TXLIVE.loadScript(lang_url, function() {
                        TXLIVE.analytics.stopwatch("stop", "translate_to_time");
                        setTimeout(function() {
                            if (!lang_loaded && TXLIVE.__onerror) callFunctionArray(TXLIVE.__onerror, "[ERR2] Cannot load translation url: " + lang_url);
                            __ready__()
                        }, 100)
                    })
                }
            }
            TXLIVE_PRIVATE.storage_set("txlive:selectedlang",
                langcode);
            TXLIVE.selected_lang = langcode;
            var elem = document.getElementById("tx-live-lang-current");
            if (elem) elem.innerHTML = TXLIVE.getLanguageName(langcode)
        } catch (err$30) {
            TXLIVE.logger.error(err$30)
        }
    };

    function setLanguages(languages) {
        try {
            if (!languages || !languages.timestamp || !languages.translation || !languages.source) return;
            if (TXLIVE.languages && TXLIVE.languages.timestamp === languages.timestamp) {
                setupPicker();
                return
            }
            if (isString(languages.translation)) try {
                languages.translation = JSON.parse(languages.translation) || []
            } catch (err$31) {
                TXLIVE.logger.error(err$31);
                languages.translation = []
            }
            TXLIVE.denormalized_languages = [{
                name: languages.source.name,
                code: languages.source.code,
                source: true
            }];
            for (var i = 0; i < languages.translation.length; ++i) TXLIVE.denormalized_languages.push({
                name: languages.translation[i].name,
                code: languages.translation[i].code
            });
            TXLIVE.languages = languages;
            if (TXLIVE.selected_lang && TXLIVE.selected_lang.length && languages.source.code !== TXLIVE.selected_lang && !TXLIVE.hasTargetLanguage(TXLIVE.selected_lang)) resetSegments(languages.source.code);
            TXLIVE.selected_lang = languages.source.code;
            callFunctionArray(TXLIVE.__onfetchlanguages, TXLIVE.denormalized_languages);
            setupPicker()
        } catch (err$32) {
            TXLIVE.logger.error(err$32)
        }
    }
    TXLIVE.detectLanguage = function() {
        try {
            var detect_lang = TXLIVE.settings.detectlang;
            if (detect_lang && isFunction(detect_lang)) {
                detect_lang = detect_lang();
                if (detect_lang !== true && detect_lang !== false) return detect_lang
            }
            if (!detect_lang) return TXLIVE_PRIVATE.storage_get("txlive:selectedlang");
            var url = TXLIVE_PRIVATE.getWindowLocation().href.split("?");
            if (url.length == 2) {
                var params = url[1].split("&");
                for (var i = 0; i < params.length; ++i) {
                    var keyvalue = params[i].split("=");
                    if (keyvalue.length == 2 && keyvalue[0].toLowerCase() == "lang") {
                        var code = TXLIVE.normalizeLangCode(keyvalue[1]);
                        if (TXLIVE.hasLanguageCode(code)) return code;
                        break
                    }
                }
            }
            url = TXLIVE_PRIVATE.getWindowLocation().host.split(".");
            if (url.length > 0) {
                var code = TXLIVE.normalizeLangCode(url[0]);
                if (TXLIVE.hasLanguageCode(code)) return code
            }
            url = TXLIVE_PRIVATE.getWindowLocation().pathname.split("/");
            if (url.length >
                1) {
                var code = TXLIVE.normalizeLangCode(url[1]);
                if (TXLIVE.hasLanguageCode(code)) return code
            }
            return TXLIVE_PRIVATE.storage_get("txlive:selectedlang") || TXLIVE_PRIVATE.getBrowserLocale()
        } catch (err$33) {
            TXLIVE.logger.error(err$33)
        }
    };
    TXLIVE.getLanguageName = function(langcode) {
        try {
            if (!TXLIVE.denormalized_languages) return;
            var d = TXLIVE.denormalized_languages;
            for (var i = 0; i < d.length; ++i)
                if (d[i].code === langcode) return d[i].name
        } catch (err$34) {
            TXLIVE.logger.error(err$34)
        }
    };
    TXLIVE.hasLanguageCode = function(langcode) {
        try {
            if (!TXLIVE.denormalized_languages) return false;
            var d = TXLIVE.denormalized_languages;
            for (var i = 0; i < d.length; ++i)
                if (d[i].code === langcode) return true;
            return false
        } catch (err$35) {
            TXLIVE.logger.error(err$35)
        }
    };
    TXLIVE.matchLanguageCode = function(fuzzy_langcode) {
        try {
            var stripCode = function(code) {
                code = code || "";
                if (code.indexOf("-") >= 0) code = code.split("-")[0];
                else if (code.indexOf("_") >= 0) code = code.split("_")[0];
                return code.toLowerCase()
            };
            if (!TXLIVE.denormalized_languages) return;
            fuzzy_langcode = stripCode(fuzzy_langcode);
            var d = TXLIVE.denormalized_languages;
            for (var i =
                    0; i < d.length; ++i)
                if (stripCode(d[i].code) === fuzzy_langcode) return d[i].code
        } catch (err$36) {
            TXLIVE.logger.error(err$36)
        }
    };
    TXLIVE.getAllLanguages = function() {
        return TXLIVE.denormalized_languages
    };
    TXLIVE.getSourceLanguage = function() {
        if (TXLIVE.languages) return TXLIVE.languages.source
    };
    TXLIVE.getSourceLanguageCode = function() {
        if (TXLIVE.languages && TXLIVE.languages.source) return TXLIVE.languages.source.code
    };
    TXLIVE.getSelectedLanguageCode = function() {
        return TXLIVE.selected_lang || ""
    };
    TXLIVE.onBeforeTranslatePage =
        function(fcall) {
            this.__onbeforetranslatepage = this.__onbeforetranslatepage || [];
            this.__onbeforetranslatepage.push(fcall)
        };
    TXLIVE.onTranslatePage = function(fcall) {
        this.__ontranslatepage = this.__ontranslatepage || [];
        this.__ontranslatepage.push(fcall);
        if (LAST_TRANSLATION_LANG && fcall) callFunctionArray([fcall], LAST_TRANSLATION_LANG)
    };
    TXLIVE.onFetchLanguages = function(fcall) {
        this.__onfetchlanguages = this.__onfetchlanguages || [];
        this.__onfetchlanguages.push(fcall);
        if (TXLIVE.languages && fcall) callFunctionArray([fcall],
            TXLIVE.denormalized_languages)
    };
    TXLIVE.onDynamicContent = function(fcall) {
        this.__ondynamiccontent = this.__ondynamiccontent || [];
        this.__ondynamiccontent.push(fcall)
    };
    TXLIVE.onError = function(fcall) {
        this.__onerror = this.__onerror || [];
        this.__onerror.push(fcall)
    };
    TXLIVE.onReady = function(fcall) {
        if (TXLIVE.ready && fcall) callFunctionArray([fcall], TXLIVE.load_msec);
        else {
            this.__onready = this.__onready || [];
            this.__onready.push(fcall)
        }
    };
    TXLIVE.onBeforeTranslate = function(fcall) {
        this.__onbeforetranslate = this.__onbeforetranslate || [];
        this.__onbeforetranslate.push(fcall)
    };
    TXLIVE.onAfterTranslate = function(fcall) {
        this.__onaftertranslate = this.__onaftertranslate || [];
        this.__onaftertranslate.push(fcall)
    };
    TXLIVE.unBind = function(fcall) {
        removeFromFunctionArray(this.__onready, fcall);
        removeFromFunctionArray(this.__onerror, fcall);
        removeFromFunctionArray(this.__ondynamiccontent, fcall);
        removeFromFunctionArray(this.__onfetchlanguages, fcall);
        removeFromFunctionArray(this.__onbeforetranslatepage, fcall);
        removeFromFunctionArray(this.__ontranslatepage,
            fcall);
        removeFromFunctionArray(this.__onbeforetranslate, fcall);
        removeFromFunctionArray(this.__onaftertranslate, fcall)
    };
    TXLIVE.translateNodes = function(node_array) {
        TXLIVE.dynamicPageOff();
        callFunctionArray(TXLIVE.__onbeforetranslate);
        NEW_SEGMENTS_LIST = [];
        NEW_SEGMENTS_DICT = {};
        for (var i = 0; i < node_array.length; ++i) {
            var node = node_array[i];
            try {
                if (!IS_SKIP_PARENT(node)) PARSE_DOM(node, [], PARSER_OPTIONS.DEFAULT)
            } catch (err$37) {
                TXLIVE.logger.error(err$37)
            }
        }
        if (NEW_SEGMENTS_LIST.length) {
            if (LAST_TRANSLATION_JSON) {
                var json =
                    LAST_TRANSLATION_JSON;
                var i = NEW_SEGMENTS_LIST.length;
                while (i--) {
                    var s = NEW_SEGMENTS_LIST[i];
                    var string = json[s.key] || s.source_string;
                    var j = s.elements.length;
                    while (j--) {
                        var item = s.elements[j];
                        try {
                            item.set(item, string)
                        } catch (err$38) {
                            s.elements.splice(j, 1)
                        }
                    }
                    s.translation_string = string
                }
            }
            callFunctionArray(TXLIVE.__ondynamiccontent, NEW_SEGMENTS_LIST);
            autoCollect(NEW_SEGMENTS_DICT)
        }
        NEW_SEGMENTS_LIST = null;
        NEW_SEGMENTS_DICT = null;
        callFunctionArray(TXLIVE.__onaftertranslate);
        TXLIVE.dynamicPageOn()
    };
    TXLIVE.translateNode =
        function(node) {
            TXLIVE.translateNodes([node])
        };
    var timer_translate_text = null;
    var autocollect_translate_text = {};

    function autocollect_translate_text_cb() {
        timer_translate_text = null;
        autoCollect(autocollect_translate_text);
        autocollect_translate_text = {}
    }

    function translate_text_params(text, params) {
        if (params)
            for (key in params) text = text.replace(new RegExp("\\{" + key + "\\}", "g"), params[key]);
        return text
    }
    TXLIVE.translateText = function(text, params) {
        if (!text || !text.length) return text;
        var key = TXLIVE_PRIVATE.md5(text);
        if (LAST_TRANSLATION_JSON && LAST_TRANSLATION_JSON[key]) return translate_text_params(LAST_TRANSLATION_JSON[key], params);
        var segments = TXLIVE.segments;
        var segment_list = TXLIVE.segment_list;
        var segment = segments[key];
        if (!segment) {
            var segment = {
                key: key,
                source_string: text,
                tags: ["api"],
                elements: []
            };
            segments[key] = segment;
            segment_list.push(segment);
            callFunctionArray(TXLIVE.__ondynamiccontent, [segment]);
            autocollect_translate_text[key] = segment;
            if (timer_translate_text) clearTimeout(timer_translate_text);
            timer_translate_text =
                setTimeout(autocollect_translate_text_cb, 1E3)
        }
        return translate_text_params(text, params)
    };
    TXLIVE.setTranslations = function(json) {
        if (!json || !json.source || !json.translation) return;
        json.timestamp = Date.now();
        for (var i = 0; i < json.translation.length; ++i) {
            var translation = json.translation[i];
            if (translation.code && translation.translations) LOCAL_TRANSLATION_STORAGE[translation.code] = translation.translations
        }
        setLanguages(json);
        if (TXLIVE.traverse_ready) TXLIVE.translateTo(TXLIVE.normalizeLangCode(TXLIVE.detectLanguage()))
    };
    TXLIVE_PRIVATE.translateFromJSON = function(lang_code, translations, merge) {
        if (!translations || !lang_code) return;
        if (merge && LOCAL_TRANSLATION_STORAGE[lang_code]) {
            var existing = LOCAL_TRANSLATION_STORAGE[lang_code];
            for (var key in translations) existing[key] = translations[key]
        } else LOCAL_TRANSLATION_STORAGE[lang_code] = translations;
        TXLIVE.selected_lang = lang_code;
        translateSegments(lang_code, LOCAL_TRANSLATION_STORAGE[lang_code])
    };
    TXLIVE_PRIVATE.revertToSource = function(lang_code) {
        TXLIVE.selected_lang = lang_code;
        resetSegments(lang_code)
    };
    TXLIVE_PRIVATE.parseHTMLBlock = function(html) {
        var root = document.createElement("div");
        root.innerHTML = html;
        NEW_SEGMENTS_LIST = [];
        NEW_SEGMENTS_DICT = {};
        try {
            PARSE_DOM(root, [], PARSER_OPTIONS.DEFAULT)
        } catch (err$39) {
            TXLIVE.logger.error(err$39)
        }
        var segments = NEW_SEGMENTS_DICT;
        NEW_SEGMENTS_LIST = null;
        NEW_SEGMENTS_DICT = null;
        return {
            root: root,
            segments: segments
        }
    };
    TXLIVE.segmentHTML = function(html, as_key_value_json) {
        var segments = TXLIVE_PRIVATE.parseHTMLBlock(html).segments;
        var json = {};
        if (as_key_value_json)
            for (var key in segments) json[key] =
                segments[key].source_string;
        else
            for (var key in segments) {
                var segment = segments[key];
                json[key] = {
                    source_string: segment.source_string,
                    tags: segment.tags
                }
            }
        return json
    };
    TXLIVE.translateHTML = function(html, translations) {
        var parsed_content = TXLIVE_PRIVATE.parseHTMLBlock(html);
        var segments = parsed_content.segments;
        translations = translations || LAST_TRANSLATION_JSON;
        if (translations)
            for (var key in segments) {
                var s = segments[key];
                var string = translations[s.key] || s.source_string;
                var j = s.elements.length;
                while (j--) {
                    var item =
                        s.elements[j];
                    try {
                        item.set(item, string)
                    } catch (err$40) {}
                }
            }
        return parsed_content.root.innerHTML
    };
    TXLIVE_PRIVATE.extractDomain = function(url) {
        if (!url) return "";
        var domain;
        if (url.indexOf("://") > -1) domain = url.split("/")[2];
        else domain = url.split("/")[0];
        return domain
    };
    TXLIVE.group = TXLIVE_PRIVATE.md5(document.title || "default");
    try {
        var metas = document.getElementsByTagName("meta");
        for (i = 0; i < metas.length; ++i) {
            var group = metas[i].getAttribute("txlive-group");
            if (group && group.length) {
                TXLIVE.group = TXLIVE_PRIVATE.md5(group);
                break
            }
        }
    } catch (err$41) {
        TXLIVE.logger.error(err$41)
    }
    TXLIVE.version = "latest";
    TXLIVE.segments = {};
    TXLIVE.segment_list = [];
    TXLIVE.locquant_segment_list = [];

    function __ready__() {
        if (TXLIVE.ready) return;
        TXLIVE.ready = true;
        TXLIVE.analytics.submitEvent("page_view", 1);
        showDom();
        autoCollect();
        TXLIVE.analytics.boot();
        try {
            TXLIVE.load_msec = (new Date).getTime() - benchmark;
            TXLIVE.analytics.stopwatch("stop", "live_load_time");
            TXLIVE.analytics.submitEvent("page_language", 1, TXLIVE.normalizeLangCode(TXLIVE.detectLanguage()))
        } catch (err$42) {}
        callFunctionArray(TXLIVE.__onready,
            TXLIVE.load_msec);
        TXLIVE.__onready = null;
        if (TXLIVE.settings.prerender) window.prerenderReady = true;
        if (TXLIVE_SIDEBAR.shouldOpen()) {
            TXLIVE_SIDEBAR.patchJSON();
            TXLIVE_SIDEBAR.load();
            TXLIVE_SIDEBAR.setCookie(TXLIVE_SIDEBAR.__cookie.key, TXLIVE_SIDEBAR.__cookie.value, TXLIVE_SIDEBAR.__cookie.timeout)
        }
    }
    TXLIVE_SIDEBAR.__cookie = {
        key: "transifex_sidebar",
        value: "true",
        timeout: 8
    };
    TXLIVE_SIDEBAR.setCookie = function(name, value, hours) {
        var expires = "";
        if (hours) {
            var date = new Date;
            date.setTime(date.getTime() + hours * 60 * 60 *
                1E3);
            expires = "; expires=" + date.toGMTString()
        }
        document.cookie = name + "=" + value + expires + "; path=/"
    };
    TXLIVE_SIDEBAR.getCookie = function(name) {
        var nameEQ = name + "=";
        var cookie_values = document.cookie.split(";");
        for (var i = 0; i < cookie_values.length; i++) {
            var value = cookie_values[i].trim();
            if (value.indexOf(nameEQ) == 0) return value.substring(nameEQ.length, value.length)
        }
    };
    TXLIVE_SIDEBAR.delCookie = function(name) {
        TXLIVE_SIDEBAR.setCookie(name, "", -1)
    };
    TXLIVE_SIDEBAR.shouldOpen = function() {
        if (!TXLIVE.settings.api_key && !TXLIVE.settings.mode) return false;
        var cookie_dict = TXLIVE_SIDEBAR.__cookie;
        if (TXLIVE.settings.sidebar || TXLIVE_SIDEBAR.getCookie(cookie_dict.key) === cookie_dict.value) return true;
        var params = TXLIVE_SIDEBAR.getLocationParams();
        for (var key in params)
            if (key.toLowerCase() === SIDEBAR_URL_TRIGGER) return true;
        return false
    };
    TXLIVE_SIDEBAR.getLocationParams = function() {
        var search_string = TXLIVE_PRIVATE.getWindowLocation().search.substr(1);
        var params_array = search_string.split("&");
        var return_value = {};
        for (var i = 0; i < params_array.length; i++) {
            var param_string =
                params_array[i];
            if (param_string.indexOf("=") != -1) {
                var param_string_split = param_string.split("=");
                var key = param_string_split[0],
                    value = param_string_split[1];
                return_value[key] = value
            } else return_value[param_string] = null
        }
        return return_value
    };
    TXLIVE_SIDEBAR.load = function(callback) {
        if (TXLIVE_SIDEBAR.loaded) return;
        TXLIVE.analytics.stopwatch("start", "sidebar_load_time");
        TXLIVE_SIDEBAR.loaded = true;
        var sidebar_url = TXLIVE.settings.sidebar_base_url + "/_/live/sidebar/?lang=" + TXLIVE.settings.sidebar_lang;
        if (TXLIVE.settings.mode) sidebar_url +=
            "&mode=" + TXLIVE.settings.mode;
        TXLIVE.doCORSRequest(sidebar_url, "GET", "", function(html) {
            var div = document.createElement("div");
            div.innerHTML = html;
            var scripts = [].slice.call(div.getElementsByTagName("script"));
            for (var i = scripts.length; i--;)
                if (scripts[i].getAttribute("type") == "text/javascript") scripts[i].parentNode.removeChild(scripts[i]);
                else scripts.splice(i, 1);
            var links = [].slice.call(div.getElementsByTagName("link")),
                head = document.head || document.getElementsByTagName("head")[0];
            for (var i = links.length; i--;) {
                var rel =
                    links[i].getAttribute("rel"),
                    href = links[i].getAttribute("href");
                if (href && rel && rel.indexOf("stylesheet") >= 0) links[i].setAttribute("href", TXLIVE.assetUrl(href, TXLIVE.settings.assets_base_url));
                head.appendChild(links[i].parentNode.removeChild(links[i]))
            }
            while (div.firstChild) {
                var child = div.firstChild;
                div.removeChild(child);
                document.body.appendChild(child)
            }

            function consume_scripts() {
                var script = scripts.shift();
                if (!script) {
                    if (callback) callback();
                    return
                }
                var url = script.getAttribute("src");
                if (url) TXLIVE.loadScript(TXLIVE.assetUrl(url,
                    TXLIVE.settings.assets_base_url), consume_scripts, script.innerHTML, script.attributes);
                else {
                    TXLIVE.loadScript(null, null, script.innerHTML, script.attributes);
                    consume_scripts()
                }
            }
            consume_scripts()
        })
    };
    TXLIVE_SIDEBAR.patchJSON = function() {
        TXLIVE_PRIVATE._json_stringify = JSON.stringify;
        JSON.stringify = function(value, replacer, spacer) {
            if (Array.prototype.toJSON !== undefined) {
                var _array_tojson = Array.prototype.toJSON;
                delete Array.prototype.toJSON;
                var r = TXLIVE_PRIVATE._json_stringify(value, replacer, spacer);
                Array.prototype.toJSON =
                    _array_tojson;
                return r
            } else return TXLIVE_PRIVATE._json_stringify(value, replacer, spacer)
        }
    };
    TXLIVE_PRIVATE.getXPath = function(element) {
        var paths = [];
        for (; element && (element.nodeType == 1 || element.nodeType == 3); element = element.parentNode) {
            var index = 0;
            for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
                if (sibling.nodeType == 10) continue;
                if (sibling.nodeName == element.nodeName) ++index
            }
            var tagName = element.nodeName.toLowerCase();
            var pathIndex = "[" + (index + 1) + "]";
            paths.unshift(tagName + pathIndex)
        }
        return paths.length ?
            "/" + paths.join("/") : null
    };
    TXLIVE_PRIVATE.getSegmentsXPaths = function() {
        var xpaths = {};
        for (var i = 0; i < TXLIVE.segment_list.length; ++i) {
            var segment = TXLIVE.segment_list[i];
            for (var j = 0; j < segment.elements.length; ++j) {
                var xpath = TXLIVE_PRIVATE.getXPath(segment.elements[j].node);
                if (xpath) xpaths[xpath] = segment.key
            }
        }
        return xpaths
    };
    TXLIVE.analytics = TXLIVE.analytics || {};
    TXLIVE.analytics.timers = TXLIVE.analytics.timers || [];
    TXLIVE.analytics.queue = TXLIVE.analytics.queue || [];
    TXLIVE.analytics.whitelist = [/transifex\.com$/,
        /tx\.loc$/
    ];
    TXLIVE.analytics._is_whitelisted = function(host) {
        var i = TXLIVE.analytics.whitelist.length;
        while (i--)
            if (TXLIVE.analytics.whitelist[i].test(host)) return true;
        return false
    };
    TXLIVE.analytics._submit = function(event_type, event_value, event_extra) {
        if ("undefined" == typeof event_type || "undefined" == typeof event_value) return;
        if (!event_extra) event_extra = "";
        var event_hostname, event_pathname;
        if (!TXLIVE.settings.current_url) {
            event_hostname = TXLIVE_PRIVATE.getWindowHost();
            event_pathname = TXLIVE_PRIVATE.getWindowPath()
        } else {
            var l =
                document.createElement("a");
            l.href = TXLIVE.settings.current_url;
            event_hostname = l.hostname;
            event_pathname = l.pathname
        }
        var event_origin = "web";
        if (TXLIVE.settings.wp) event_origin = "wordpress";
        if (TXLIVE.settings.mode && TXLIVE.settings.mode == "preview") event_origin = "preview";
        TXLIVE.analytics.queue.push({
            event_type: event_type,
            event_value: event_value,
            event_extra: event_extra,
            event_apikey: TXLIVE.settings.api_key,
            event_timestamp: Date.now(),
            event_hostname: event_hostname,
            event_pathname: event_pathname,
            event_origin: event_origin
        });
        if (!TXLIVE.analytics._consume_timer && TXLIVE.analytics._booted) TXLIVE.analytics._consume_timer = setTimeout(TXLIVE.analytics._consume, TXLIVE.analytics.consume_interval)
    };
    TXLIVE.analytics._consume = function() {
        TXLIVE.analytics._consume_timer = null;
        if (!TXLIVE.analytics.queue.length) return;
        var queueCopy = JSON.stringify(TXLIVE.analytics.queue);
        TXLIVE.logger.info("Submitting " + TXLIVE.analytics.queue.length + " points to analytics server.");
        TXLIVE.analytics.queue = [];
        TXLIVE.doCORSRequest(TXLIVE.analytics.analytics_endpoint,
            "POST", queueCopy,
            function(data) {})
    };
    TXLIVE.analytics.boot = function() {
        TXLIVE.analytics.analytics_enabled = TXLIVE.settings.analytics_enabled || true;
        if (!TXLIVE.analytics.analytics_enabled) return;
        if (!TXLIVE.settings.wp && !TXLIVE.analytics._is_whitelisted(window.location.hostname)) {
            TXLIVE.analytics.submitEvent = function() {};
            TXLIVE.analytics.stopwatch = function() {};
            TXLIVE.analytics.queue = [];
            return
        }
        TXLIVE.analytics.analytics_endpoint = TXLIVE.settings.analytics_endpoint || "https://an-tx.transifex.com";
        TXLIVE.analytics.consume_interval =
            TXLIVE.settings.analytics_interval || 1E4;
        TXLIVE.analytics._booted = true;
        TXLIVE.analytics._consume()
    };
    TXLIVE.analytics.stopwatch = function(action, event_type, event_extra) {
        if (action == "start") TXLIVE.analytics.timers[event_type] = (new Date).getTime();
        else {
            var time_taken = (new Date).getTime();
            time_taken -= TXLIVE.analytics.timers[event_type];
            delete TXLIVE.analytics.timers[event_type];
            TXLIVE.analytics._submit(event_type, time_taken, event_extra)
        }
    };
    TXLIVE.analytics.submitEvent = function(event_type, event_value, event_extra) {
        if (!event_type) return;
        event_value = event_value || 1;
        TXLIVE.analytics._submit(event_type, event_value, event_extra)
    };

    function __traverseready__() {
        if (TXLIVE.traverse_ready) return;
        TXLIVE.traverse_ready = true;
        try {
            SKIP_TAGS_USER = {};
            if (TXLIVE.settings.ignore_tags && TXLIVE.settings.ignore_tags.length)
                for (var i = 0; i < TXLIVE.settings.ignore_tags.length; ++i) {
                    var tag = TXLIVE.settings.ignore_tags[i];
                    if (tag.length) SKIP_TAGS_USER[tag] = true
                }
        } catch (err$43) {
            TXLIVE.logger.error(err$43)
        }
        try {
            SKIP_CLASS_USER = {};
            if (TXLIVE.settings.ignore_class && TXLIVE.settings.ignore_class.length)
                for (var i =
                        0; i < TXLIVE.settings.ignore_class.length; ++i) {
                    var cls = TXLIVE.settings.ignore_class[i];
                    if (cls.length) SKIP_CLASS_USER[cls] = true
                }
        } catch (err$44) {
            TXLIVE.logger.error(err$44)
        }
        try {
            if (TXLIVE.segment_list.length) {
                TXLIVE.segment_list.splice(0, TXLIVE.segment_list.length);
                for (var key in TXLIVE.segments) delete TXLIVE.segments[key]
            }
            TXLIVE.analytics.stopwatch("start", "parse_dom_time");
            PARSE_DOM(document.head || document.getElementsByTagName("head")[0], [], PARSER_OPTIONS.DEFAULT);
            PARSE_DOM(document.body || document.getElementsByTagName("body")[0], [], PARSER_OPTIONS.DEFAULT);
            TXLIVE.analytics.stopwatch("stop", "parse_dom_time")
        } catch (err$45) {
            TXLIVE.logger.error(err$45)
        }
        try {
            __init_mutators__()
        } catch (err$46) {
            TXLIVE.logger.error(err$46)
        }
    }

    function __reload__() {
        var previous_lang = null;
        if (LAST_TRANSLATION_JSON) {
            previous_lang = LAST_TRANSLATION_LANG;
            var source_lang = TXLIVE.getSourceLanguage();
            if (source_lang && source_lang.code) TXLIVE.translateTo(source_lang.code)
        }
        __destroy_mutators__();
        TXLIVE.traverse_ready = false;
        CLEAR_FLAGS_DOM(document.head || document.getElementsByTagName("head")[0],
            true);
        CLEAR_FLAGS_DOM(document.body || document.getElementsByTagName("body")[0], true);
        __traverseready__();
        if (previous_lang) TXLIVE.translateTo(previous_lang)
    }

    function __init__() {
        try {
            benchmark = (new Date).getTime();
            TXLIVE.analytics.stopwatch("start", "live_load_time")
        } catch (err$47) {}
        setSettings(window.liveSettings, true);
        setSettings(window.proxyLiveSettings, true);
        if (window.Raven && window.Raven.setUser)
            if (TXLIVE.settings.api_key) window.Raven.setUser({
                id: TXLIVE.settings.api_key
            });
            else if (TXLIVE.user) window.Raven.setUser({
            id: TXLIVE.user.username,
            email: TXLIVE.user.email
        });
        TXLIVE.languages_url = TXLIVE.settings.cdn || "//cdn.transifex.com/";
        TXLIVE.autocollect_url = TXLIVE.settings.autocollect_url || "//clsrv.transifex.com";
        if (TXLIVE.settings.prerender) window.prerenderReady = false;
        TXLIVE.traverse_ready = false;
        if (TXLIVE.settings.api_key && !TXLIVE.live_noop) {
            if (TXLIVE.settings.version) TXLIVE.version = TXLIVE.settings.version;
            var has_sidebar = TXLIVE_SIDEBAR.shouldOpen(),
                previous_settings, previous_langs;
            if (!has_sidebar) {
                previous_settings = TXLIVE_PRIVATE.storage_get("txlive:settings");
                previous_langs = TXLIVE_PRIVATE.storage_get("txlive:languages");
                if (previous_settings && previous_langs) {
                    setSettings(previous_settings);
                    __traverseready__();
                    setLanguages(previous_langs);
                    TXLIVE.translateTo(TXLIVE.normalizeLangCode(TXLIVE.detectLanguage()))
                }
            }
            window.transifex_settings = function(settings) {
                if (!settings || !settings.production || !settings.staging) {
                    TXLIVE.logger.error("Invalid settings json object");
                    return
                }
                if (window.liveSettings.staging === undefined) TXLIVE.settings.staging = (settings.staging.domain ||
                    "").toLowerCase() === TXLIVE_PRIVATE.getWindowHost().toLowerCase();
                var _filters = settings.filters;
                settings = TXLIVE.settings.staging ? settings.staging : settings.production;
                settings.filters = _filters;
                TXLIVE_PRIVATE.storage_set("txlive:settings", settings);
                setSettings(settings);
                if (previous_settings && previous_langs && settings && TXLIVE.traverse_ready) try {
                    if (JSON.stringify(previous_settings) !== JSON.stringify(settings)) __reload__()
                } catch (err$48) {
                    TXLIVE.logger.error(err$48)
                }
            };
            var base_url = TXLIVE.languages_url + TXLIVE.settings.api_key +
                "/" + TXLIVE.version;
            var langs_loaded = false;
            window.transifex_languages = function(data) {
                langs_loaded = true;
                TXLIVE_PRIVATE.storage_set("txlive:languages", data);
                setLanguages(data);
                TXLIVE.translateTo(TXLIVE.normalizeLangCode(TXLIVE.detectLanguage()));
                if (!TXLIVE.languages) __ready__()
            };
            TXLIVE.analytics.stopwatch("start", "settings_load_time");
            TXLIVE.loadScript(base_url + "/settings.all.jsonp", function() {
                TXLIVE.analytics.stopwatch("stop", "settings_load_time");
                __traverseready__();
                if (has_sidebar) __ready__();
                else {
                    var languages_partial_url =
                        "";
                    if (TXLIVE.settings.staging) languages_partial_url = "/languages.staging.jsonp";
                    else languages_partial_url = "/languages.jsonp";
                    TXLIVE.analytics.stopwatch("start", "languages_load_time");
                    TXLIVE.loadScript(base_url + languages_partial_url, function() {
                        TXLIVE.analytics.stopwatch("stop", "languages_load_time");
                        setTimeout(function() {
                            if (!langs_loaded) {
                                __ready__();
                                callFunctionArray(TXLIVE.__onerror, "[ERR3] Cannot load languages url: " + base_url.replace("{}", "languages"))
                            }
                        }, 100)
                    })
                }
            })
        } else {
            __traverseready__();
            __ready__()
        }
    }
    bindReady(__init__);
    bindLoad(function() {
        TXLIVE.autocollect_ready = true;
        autocollectConsume();
        TXLIVE.analytics.submitEvent("segment_count", Object.keys(TXLIVE.segments).length)
    })
})();
