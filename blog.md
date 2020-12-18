---
layout: post
---
<table class='table table-hover'>
  <tr class='thead-dark'>
    <th> Date </th>
    <th> Notes </th>
    <th> Paper </th>
  </tr>
  {% for post in site.posts %}
  <tr>
    <td>
      {{ post.datel }}
    </td>
    <td>
      <a href="{{ post.url }}" > {{ post.title }} </a>
    </td>
    <td>
      <a role='button' class='btn-danger btn-sm' href="{{ post.link }}" target="_blank">Paper</a>
    </td>
  </tr>
  {% endfor %}
</table>

