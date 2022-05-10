import{_ as n,c as s,o as a,a as t}from"./app.f443921f.js";const m='{"title":"@obewds/vue-el","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Importing","slug":"importing"},{"level":3,"title":"Template syntax","slug":"template-syntax"},{"level":3,"title":"Script setup syntax","slug":"script-setup-syntax"},{"level":3,"title":"Composition API syntax","slug":"composition-api-syntax"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"tag","slug":"tag"},{"level":3,"title":"text","slug":"text"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"#default","slug":"default"},{"level":3,"title":"Text Prop vs #default Slot Precidence","slug":"text-prop-vs-default-slot-precidence"},{"level":3,"title":"Empty State #default Slot Placeholder","slug":"empty-state-default-slot-placeholder"},{"level":2,"title":"Uninstall","slug":"uninstall"}],"relativePath":"index.md"}',e={},p=t(`<h1 id="obewds-vue-el" tabindex="-1">@obewds/vue-el <a class="header-anchor" href="#obewds-vue-el" aria-hidden="true">#</a></h1><p>Welcome to the docs page for OBE:WDS&#39;s <code>VueEl.vue</code> component for <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>!</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @obewds/vue-el --save-dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="importing" tabindex="-1">Importing <a class="header-anchor" href="#importing" aria-hidden="true">#</a></h2><h3 id="template-syntax" tabindex="-1">Template syntax <a class="header-anchor" href="#template-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- One-Liner span element using the text string prop --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Text prop string content<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Div element using the slot --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Compnent slot content
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueEl</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="script-setup-syntax" tabindex="-1">Script setup syntax <a class="header-anchor" href="#script-setup-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> VueEl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-el&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="composition-api-syntax" tabindex="-1">Composition API syntax <a class="header-anchor" href="#composition-api-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> VueEl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-el&#39;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> VueEl <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><h3 id="tag" tabindex="-1">tag <a class="header-anchor" href="#tag" aria-hidden="true">#</a></h3><p>\u2705 - Type <code>String</code><br> \u2705 - Required<br> \u2705 - Validates</p><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My VueEl span tag<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Outputs:</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>My VueEl span tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>The majority of HTML tags passed into the <code>tag</code> prop are valid. However, the component does <strong><em>exclude all</em></strong> of the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Empty_element" target="_blank" rel="noopener noreferrer">HTML Empty Elements</a> to avoid invalid closing tags generated by Vue&#39;s &lt;component is=&quot;&quot;&gt; output, as well as excluding <strong><em>each</em></strong> of the following elements due to runtime issues/errors: <code>body</code>, <code>head</code>, <code>html</code>, <code>noscript</code>, <code>script</code>, <code>slot</code> and <code>template</code> elements are also excluded and won&#39;t validate!</p></blockquote><p>Another example:</p><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My VueEl div tag<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Outputs:</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>My VueEl div tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="text" tabindex="-1">text <a class="header-anchor" href="#text" aria-hidden="true">#</a></h3><p>\u2705 - Type <code>String</code><br> \u274C - Not Required<br> \u274C - Doesn&#39;t Validate</p><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My text prop string<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Outputs:</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>My text prop string<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If both the <code>text</code> prop and <code>slot</code> content are used, then the <code>text</code> prop takes precidence and the <code>slot</code> content will <strong>NOT</strong> render!</p></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">#default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        My slot content
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueEl</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Outputs:</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>My slot content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>If both the <code>text</code> prop and <code>slot</code> content are used, then the <code>text</code> prop takes precidence and the <code>slot</code> content will <strong>NOT</strong> render!</p></div><br><h3 id="text-prop-vs-default-slot-precidence" tabindex="-1">Text Prop vs #default Slot Precidence <a class="header-anchor" href="#text-prop-vs-default-slot-precidence" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--
    The text=&quot;&quot; attr/prop value takes precidence 
    over slot content!
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>This text prop value will override<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        This slot content.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueEl</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Outputs:</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>This text prop value will override<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><br><h3 id="empty-state-default-slot-placeholder" tabindex="-1">Empty State #default Slot Placeholder <a class="header-anchor" href="#empty-state-default-slot-placeholder" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 
    Empty slot and text prop/attr values 
    will render the default component 
    slot placeholder string &quot;VueEl&quot;!
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEl</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- This comment won&#39;t render --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueEl</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Outputs:</p><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- The placeholder will still render, though --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>VueEl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br><h2 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> uninstall @obewds/vue-el
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,47),l=[p];function o(c,i,u,r,d,k){return a(),s("div",null,l)}var b=n(e,[["render",o]]);export{m as __pageData,b as default};