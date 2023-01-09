<script lang="ts">
  import { Story } from 'kitbook';
  import BadgeArray from './BadgeArray.svelte';

  const books = ['Lord of the Rings', 'www.books.com'];
</script>

<Story name="Basic display">
  <BadgeArray strings={books || []} promptMessage="What is the book name?" addMessage="Add Book" />
</Story>

<Story name="Basic display (RTL)">
  <div dir="rtl">
    <BadgeArray
      strings={books || []}
      promptMessage="What is the book name?"
      addMessage="Add Book" />
  </div>
</Story>

<Story name="Editable">
  <BadgeArray
    canEdit
    strings={books || []}
    promptMessage="What is the book name?"
    addMessage="Add Book"
    on:valueupdated={(e) => console.log('valueupdated', e.detail)} />
</Story>

<Story name="Editable (RTL)">
  <div dir="rtl">
    <BadgeArray
      canEdit
      strings={books || []}
      promptMessage="What is the book name?"
      addMessage="Add Book"
      on:valueupdated={(e) => console.log('valueupdated', e.detail)} />
  </div>
</Story>

<Story name="Handles a string">
  <BadgeArray strings={'How about this?'} />
</Story>