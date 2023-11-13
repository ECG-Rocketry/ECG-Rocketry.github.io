---
layout: archive
title: "Search"
permalink: /search/
---


<ul>
    {% for post in site.posts %}
      {% for tag in post.tags%}
        {% if tag == "link"%}
          <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
          </li>
        {% endif %}
      {% endfor %}
    {% endfor %}
</ul>