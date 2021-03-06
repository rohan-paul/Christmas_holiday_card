var snowFall = function() {
    function g() {
        var a = {
                flakeCount: 35,
                flakeColor: "#ffffff",
                flakeIndex: 999999,
                minSize: 1,
                maxSize: 2,
                minSpeed: 1,
                maxSpeed: 5,
                round: !1,
                shadow: !1,
                collection: !1,
                image: !1,
                collectionHeight: 40
            }, b = {}, c = [],
            g = 0,
            m = 0,
            j = 0,
            k = 0,
            l = 0,
            h = 0,
            f = 0,
            e = function(a, b) {
                return Math.round(a + Math.random() * (b - a))
            }, n = function(a, b) {
                for (var c in b) a.style[c] = b[c] + ("width" == c || "height" == c || 0 <= c.indexOf("radius") ? "px" : "")
            }, r = function(d, b, c, g, f) {
                this.id = f;
                this.x = d + l;
                this.y = b + k;
                this.size = c;
                this.speed = g;
                this.step = 0;
                this.stepSize =
                    e(1, 10) / 100;
                a.collection && (this.target = canvasCollection[e(0, canvasCollection.length - 1)]);
                d = null;
                a.image ? (d = new Image, d.src = a.image) : (d = document.createElement("div"), n(d, {
                    background: a.flakeColor
                }));
                d.className = "snowfall-flakes";
                d.setAttribute("id", "flake-" + this.id);
                n(d, {
                    width: this.size,
                    height: this.size,
                    position: "absolute",
                    top: this.y,
                    left: this.x,
                    fontSize: 0,
                    zIndex: a.flakeIndex
                });
                a.round && (d.style, n(d, {
                    "-moz-border-radius": a.maxSize,
                    "-webkit-border-radius": a.maxSize,
                    borderRadius: a.maxSize
                }));
                a.shadow &&
                n(d, {
                    "-moz-box-shadow": "1px 1px 1px #555",
                    "-webkit-box-shadow": "1px 1px 1px #555",
                    boxShadow: "1px 1px 1px #555"
                });
                document.body.appendChild(d);
                this.element = d;
                this.update = function() {
                    this.y += this.speed;
                    this.y > k + m - (this.size + 6) && this.reset();
                    this.element.style.top = this.y + "px";
                    this.element.style.left = ~~this.x + "px";
                    this.step += this.stepSize;
                    this.x += Math.cos(this.step);
                    (this.x > l + j - h || this.x < h) && this.reset()
                };
                this.reset = function() {
                    this.y = k;
                    this.x = l + e(h, j - h);
                    this.stepSize = e(1, 10) / 100;
                    this.size = e(100 * a.minSize,
                            100 * a.maxSize) / 100;
                    this.speed = e(a.minSpeed, a.maxSpeed)
                }
            }, q = function() {
                for (var a = 0; a < c.length; a += 1) c[a].update();
                f = setTimeout(function() {
                    q()
                }, 30)
            };
        return {
            snow: function(d, p) {
                for (var f in p) a.hasOwnProperty(f) && (a[f] = p[f]);
                b = d;
                m = b.clientHeight;
                j = b.offsetWidth;
                k = b.offsetTop;
                l = b.offsetLeft;
                b.snow = this;
                "body" === b.tagName.toLowerCase() && (h = 25);
                window.onresize = function() {
                    m = b.clientHeight;
                    j = b.offsetWidth;
                    k = b.offsetTop;
                    l = b.offsetLeft
                };
                for (i = 0; i < a.flakeCount; i += 1) g = c.length, c.push(new r(e(h, j - h), e(0, m), e(100 *
                        a.minSize, 100 * a.maxSize) / 100, e(a.minSpeed, a.maxSpeed), g));
                q()
            },
            clear: function() {
                for (var a = null, a = b.getElementsByClassName ? b.getElementsByClassName("snowfall-flakes") : b.querySelectorAll(".snowfall-flakes"), e = a.length; e--;) b.removeChild(a[e]);
                c = [];
                clearTimeout(f)
            }
        }
    }
    return {
        snow: function(a, b) {
            if ("string" == typeof b)
                if (0 < a.length)
                    for (var c = 0; c < a.length; c++) a[c].snow && a[c].snow.clear();
                else a.snow.clear();
            else if (0 < a.length)
                for (c = 0; c < a.length; c++)(new g).snow(a[c], b);
            else(new g).snow(a, b)
        }
    }
}();