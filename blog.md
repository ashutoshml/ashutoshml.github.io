---
layout: default
---


<table>
<tr>
    <th> Date </th>
    <th> Paper </th>
    <th> Notes  </th>
</tr>
{% for post in site.posts %}
<tr>
    <td>
        {{ post.datel }}
    </td>
    <td>
        <a href="{{ post.link }}" target="_blank"> {{ post.title }} </a>
    </td>
    <td>
        [<a href="{{ post.url }}">Notes</a>]
    </td>
</tr>
{% endfor %}
</table>

