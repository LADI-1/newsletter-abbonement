'use strict';

define("newsletter-abbonement/tests/acceptance/newsletter-abbonement-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | newsletter abbonement', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('should show main as the home page', async function (assert) {});
    (0, _qunit.test)('should link to newsletter.', async function (assert) {});
    (0, _qunit.test)('should link to fachbeitraege.', async function (assert) {});
    (0, _qunit.test)('should link to mission.', async function (assert) {});
    (0, _qunit.test)('should link to konzept.', async function (assert) {});
    (0, _qunit.test)('should link to relevanz.', async function (assert) {});
    (0, _qunit.test)('should link to kontakt.', async function (assert) {});
  });
});
define("newsletter-abbonement/tests/integration/components/changeset-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | changeset', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Changeset />
      */
      {"id":"uXmhQDUg","block":"{\"symbols\":[],\"statements\":[[8,\"changeset\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Changeset>
              template block text
            </Changeset>
          
      */
      {"id":"xBk4hHmj","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"changeset\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("newsletter-abbonement/tests/integration/components/newsletterform-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | newsletterform', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Newsletterform />
      */
      {"id":"INhtxzMw","block":"{\"symbols\":[],\"statements\":[[8,\"newsletterform\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Newsletterform>
              template block text
            </Newsletterform>
          
      */
      {"id":"qSjQQo1+","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"newsletterform\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("newsletter-abbonement/tests/test-helper", ["newsletter-abbonement/app", "newsletter-abbonement/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("newsletter-abbonement/tests/unit/routes/fachbeitraege-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | fachbeitraege', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:fachbeitraege');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/kompetenz-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | kompetenz', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:kompetenz');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/kontakt-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | kontakt', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:kontakt');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/mission-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | mission', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:mission');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/newsletter-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | newsletter', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:newsletter');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/newsletter/aboabschluss-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | newsletter/aboabschluss', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:newsletter/aboabschluss');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/newsletter/newsletterform-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | newsletter/newsletterform', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:newsletter/newsletterform');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/privacy-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | privacy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:privacy');
      assert.ok(route);
    });
  });
});
define("newsletter-abbonement/tests/unit/routes/relevanz-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | relevanz', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:relevanz');
      assert.ok(route);
    });
  });
});
define('newsletter-abbonement/config/environment', [], function() {
  var prefix = 'newsletter-abbonement';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('newsletter-abbonement/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
