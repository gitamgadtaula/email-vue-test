<template>
    <div class="page">
      <div class="page__header">Archiev</div>
      <div class="page__subheader">
        Emails selected ({{ checkedMails.length }})
      </div>
      <div class="page__buttons">
        <div class="flex">
          <input
            type="checkbox"
            name=""
            id=""
            class="checkmark"
            @change="selectAllMails"
          />
          <button class="button" @click="markAsRead(checkedMails)">
            Mark as read(r)
          </button>
          <!-- <button class="button" @click="archievMail(checkedMails)">
            Archiev(a)
          </button> -->
        </div>
      </div>
      <div class="page__inner">
        <div class="flex flex__col">
          <div
            :class="mail.read ? 'mailbox mailbox__read' : 'mailbox'"
            v-for="(mail, index) in lists"
            :key="index"
          >
            <div class="flex flex__column">
              <input
                v-model="checkedMails"
                type="checkbox"
                :value="mail.id"
                :id="mail.id"
                class="checkmark"
              />
              <p class="mailbox__title" @click="mailBodyClicked(mail.id)">
                {{ mail.subject }}
              </p>
            </div>
          </div>
          <div v-if="!lists.length">
            <h2>No mails to display</h2>
          </div>
        </div>
      </div>
    </div>
  
    <div
      class="drawer"
      @keyup.esc="drawerVisible = false"
      :style="{
        width: drawerVisible ? '40vw' : '0',
        paddingLeft: drawerVisible ? '40px' : '0',
      }"
    >
      <div style="text-align: left; margin: 5px" @click="drawerVisible = false">
        <p style="cursor: pointer"><u>Close (ESC)</u></p>
      </div>
      <div class="flex" style="margin-top: 8px; margin-bottom: 8px">
        <div class="button" @click="markAsRead([activeMail.id])">
          Mark as read(r)
        </div>
        <!-- <div class="button" @click="archievMail([activeMail.id])">Archiev(a)</div> -->
      </div>
      <p class="drawer__subject">
        {{ activeMail.subject }}
      </p>
      <p class="drawer__body">
        {{ activeMail.body }}
      </p>
    </div>
    <!-- We will make the mask fill the screen while the menu is visible. Because its z-index is 1 less than that of the menu, the menu will still be displayed on top of it -->
    <div
      class="drawer__mask"
      :style="{
        width: drawerVisible ? '100vw' : '0',
        opacity: drawerVisible ? '0.6' : '0',
      }"
      @click="drawerVisible = false"
    ></div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        drawerVisible: false,
        checkedMails: [],
        allSelected: false,
        activeMail: {},
      };
    },
    methods: {
      mailBodyClicked(id) {
        this.activeMail = this.lists.find((i) => i.id === id);
        this.drawerVisible = true;
      },
      selectAllMails() {
        if (!this.allSelected) {
          this.checkedMails = [];
          this.lists.forEach((list) => {
            this.checkedMails.push(list.id);
          });
          this.allSelected = true;
        } else {
          this.checkedMails = [];
          this.allSelected = false;
        }
      },
      markAsRead(ids) {
        this.$store.commit("toggleReadStatus", ids);
      },
      archievMail(ids) {
        this.$store.commit("toggleArchievStatus", ids);
      },
      handleKeyPress(e) {
        let cmd = String.fromCharCode(e.keyCode).toLowerCase();
        console.log(e);
        switch (e.key) {
          case "r":
            if (this.drawerVisible == true) {
              // only change the status of one mail when the drawer mail is open
              this.markAsRead([this.activeMail.id]);
            } else {
              // change status of every selected
              this.markAsRead(this.checkedMails);
            }
            break;
          case "a":
            if (this.drawerVisible == true) {
              // only change the status of one mail when the drawer mail is open
              this.archievMail([this.activeMail.id]);
            } else {
              // change status of every selected
              this.archievMail(this.checkedMails);
            }
          case "Escape":
            this.drawerVisible = false;
          default:
            break;
        }
      },
    },
    computed: {
      ...mapState({
        lists: (state) => state.lists.filter((item) => item.archiev == true),
      }),
    },
    created() {
      window.addEventListener("keypress", this.handleKeyPress);
      window.addEventListener("keyup", this.handleKeyPress);
    },
    destroyed() {
      window.removeEventListener("keypress");
      window.removeEventListener("keyup");
    },
  };
  </script>
  
  <style>
  </style>