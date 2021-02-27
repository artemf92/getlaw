<template>
  <div class="main--wrapper">
    <div class="panel--wrapper">
      <PanelItemTop :values="documents">
        <div class="header__title"><doc class="panel-icon" />Документы</div>
      </PanelItemTop>
      <PanelItemTop :values="templates">
        <div class="header__title"><icon1 class="panel-icon" />Шаблоны</div>
      </PanelItemTop>
      <PanelItemBottom :values="agreements" :button="'Показать согласованные'">
        <div class="header__title">
          <deal class="panel-icon" />На согласовании
        </div>
      </PanelItemBottom>
      <PanelItemBottom :values="signatures" :button="'Показать подписанные'">
        <div class="header__title">
          <signature class="panel-icon" />На подписании
        </div>
      </PanelItemBottom>
    </div>
    <PanelAside />
  </div>
</template>

<script>
import doc from "./../components/icons/doc";
import icon1 from "./../components/icons/icon1";
import deal from "./../components/icons/deal";
import signature from "./../components/icons/signature";
import PanelAside from "../components/PanelAside";
import PanelItemTop from "../components/PanelItemTop";
import PanelItemBottom from "../components/PanelItemBottom";

export default {
  name: "HomePanel",
  components: {
    doc,
    icon1,
    deal,
    signature,
    PanelAside,
    PanelItemTop,
    PanelItemBottom,
  },
  data() {
    return {
      documents: [
        {
          name: "douemnt_1",
          date: "10.03.2020",
          file: true,
        },
        {
          name: "picture1",
          date: "23.04.2020",
          file: true,
        },
        {
          name: "README",
          date: "23.03.2020",
          file: true,
        },
        {
          name: "legal-tenure",
          date: "20.02.2020",
          file: true,
        },
        {
          name: "Draft1-changes-in.red-from-Simon",
          date: "13.03.2020",
          file: true,
        },
        {
          name: "DF_ASKD_UED_changed_2393t",
          date: "10.03.2020",
          file: true,
        },
        {
          name: "FunnyMemeOMG",
          date: "10.04.2020",
          file: true,
        },
        {
          name: "asdasd",
          date: "10.03.2020",
          file: true,
        },
        {
          name: "asdasdasdasd",
          date: "10.03.2020",
          file: true,
        },
        {
          name: "dgsdgdsfg",
          date: "10.03.2020",
          file: true,
        },
        {
          name: "sdfgsdfg",
          date: "10.03.2020",
          file: true,
        },
      ],
      templates: [
        {
          name: "settlement.from.client.5126.in.case.45",
          date: "03.07.2020",
        },
        {
          name: "picture1",
          date: "18.05.2020",
        },
        {
          name: "ATTACHEMENT 836128956",
          date: "10.04.2020",
        },
        {
          name: "README",
          date: "08.01.2020",
        },
        {
          name: "legal-tenure",
          date: "01.06.2020",
        },
        {
          name: "doument_1",
          date: "23.09.2020",
        },
        {
          name: "FunnyMemeOMG",
          date: ".07.2020",
        },
        {
          name: "asdasdasd",
          date: ".07.2020",
        },
        {
          name: "sdfgsdfgsdfgdfg",
          date: ".07.2020",
        },
      ],
      agreements: [
        {
          name: "Licensing Contract",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: false },
            { userphoto: "3", pending: false },
          ],
        },
        {
          name: "RFP Proposal",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: false },
            { userphoto: "3", pending: true },
          ],
        },
        {
          name: "Sponsorship agreement",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: false },
            { userphoto: "3", pending: true },
            { userphoto: "4", pending: true },
            { userphoto: "5", pending: false },
          ],
        },
        {
          name: "Proposal: Backup & Recovery sevices",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: false },
          ],
        },
        {
          name: "Proposal: Backup & Recovery sevices12",
          status: "На согласовании у контрагента",
          participants: [{ userphoto: "1", pending: false }],
        },
      ],
      signatures: [
        {
          name: "justo",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: true },
          ],
        },
        {
          name: "luctus nec",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: true },
          ],
        },
        {
          name: "nisi vulputate nonummy",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: false },
          ],
        },
        {
          name: "Proposal: Backup & Recovery sevices",
          status: "На согласовании у контрагента",
          participants: [
            { userphoto: "1", pending: false },
            { userphoto: "2", pending: false },
          ],
        },
        {
          name: "Proposal: Backup & Recovery sevices12",
          status: "На согласовании у контрагента",
          participants: [{ userphoto: "1", pending: false }],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.panel--wrapper {
  display: flex;
  justify-content: space-between;
  row-gap: 16px;
  flex-wrap: wrap;
  height: auto;
  padding-top: 16px;
  padding-bottom: 16px;
}
.main--wrapper {
  display: flex;
}
.panel--wrapper {
  overflow-y: hidden;
  box-shadow: 0px 0px 32px rgba(41, 48, 58, 0.12);
}
</style>
