<template>
  <div
    :class="$q.screen.lt.sm ? 'q-ma-sm q-pa-sm' : 'q-pa-md q-ma-md'"
    style="background-color:white;"
  >
    <!-- ========== 報銷申請 ========== -->
    <div
      v-if="$q.screen.lt.sm"
      class="row col-12"
      style="display:flex;justify-content:space-between;"
    >
      <div class="" style="height: 55px; width: 150px;">
        <q-img
          src="https://fakeimg.pl/350x110/?text=Logo Here"
          style="height: 100%; width: 100%;"
        >
        </q-img>
      </div>
    </div>
    <div
      class="row col-12 q-mb-sm "
      style="display:flex;justify-content:space-between;"
    >
      <div class="" style="height: 55px; width: 220px;" v-if="!$q.screen.lt.sm">
        <q-img
          src="https://fakeimg.pl/220x55/?text=Logo Here"
          style="height: 100%; width: 100%;"
        >
        </q-img>
      </div>
      <span class="" style="font-size:36px;font-weight:bold;">報銷申請</span>
      <div class="q-ma-sm">
        <q-checkbox size="md" v-model="is_invalid" label="作廢" />
      </div>
    </div>
    <!-- ========== 填單人資訊 ========== -->
    <div class="row col-12 q-mb-sm title-border">
      <span class="title-text">填單人資訊</span>
    </div>
    <div class="row q-mb-sm q-col-gutter-x-sm q-col-gutter-y-sm">
      <!-- 填單人 -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.applicant_self"
          label="填單人"
          :required-valid="false"
        ></com-input>
      </div>

      <!-- 狀態  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.applicant_status"
          label="狀態"
          :required-valid="false"
          style="border:none;"
        ></com-input>
      </div>

      <!-- 簽核人員  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.approver"
          label="簽核人員"
          :required-valid="false"
        ></com-input>
      </div>

      <!-- 建立日期  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.created_date"
          label="建立日期"
          :required-valid="false"
        ></com-input>
      </div>
      <!-- 單號  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.form_id"
          label="單號"
          :required-valid="false"
        ></com-input>
      </div>
    </div>
    <!-- ========== 申請人資訊 ========== -->
    <div class="row col-12 q-mb-sm title-border">
      <span class="title-text">申請人資訊</span>
    </div>
    <div class="row q-mb-sm q-col-gutter-x-sm q-col-gutter-y-sm">
      <!-- 
      員工代號 applicant_code 
      姓名 name  
      部門 department  
      分機號碼 extension  
      成本中心 cost_center -->

      <!-- 填單人 -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.applicant_code"
          label="員工代號"
          :required-valid="false"
        ></com-input>
      </div>

      <!-- 姓名  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.name"
          label="姓名"
          :required-valid="false"
        ></com-input>
      </div>

      <!-- 部門  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.department"
          label="部門"
          :required-valid="false"
        ></com-input>
      </div>

      <!-- 分機號碼  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.extension"
          label="分機號碼"
          :required-valid="false"
        ></com-input>
      </div>

      <!-- 成本中心  -->
      <div class="col-6 col-md-4">
        <com-input
          ref="comCheck"
          readonly
          borderless
          v-model="subForm.cost_center"
          label="成本中心"
          :required-valid="false"
        ></com-input>
      </div>
      <!--   -->
      <div class="col-6 col-md-4 ">
        <q-btn
          size="md"
          label="變更申請人"
          :style="
            $q.screen.lt.sm
              ? 'margin-left:0px;width:150px;'
              : 'margin-left:90px;width:150px;'
          "
          class="btn-yellow"
        />
      </div>
    </div>
    <!-- ========== 基本資訊 ========== -->
    <div class="row col-12 q-mb-sm title-border">
      <span class="title-text">基本資訊</span>
    </div>

    <div class="row q-mb-sm q-col-gutter-x-sm q-col-gutter-y-sm">
      <div class="col-6 col-md-6">
        <com-select
          ref="comCheck"
          behavior="menu"
          v-model="subForm.payment_main"
          outlined
          :options="payMainOptions"
          dense
          emit-value
          map-options
          option-label="label"
          option-value="value"
          label="付款主體"
          :required-valid="false"
          hide-bottom-space
          :rules="[(val) => !!val || '此下拉1欄位為必填項']"
        ></com-select>
      </div>
      <div class="col-6 col-md-6">
        <com-select
          ref="comCheck"
          behavior="menu"
          v-model="subForm.payment_type"
          outlined
          :options="payTypeOptions"
          dense
          emit-value
          map-options
          option-label="label"
          option-value="value"
          label="付款型式"
          :required-valid="false"
          hide-bottom-space
          :rules="[(val) => !!val || '此下拉1欄位為必填項']"
        ></com-select>
      </div>
      <div
        class="col-12 col-md-6 "
        style="display:flex;min-height:40px;"
        :style="
          $q.screen.lt.sm
            ? 'flex-direction:column;padding:0px 0px 0px 4px;'
            : 'flex-direction:row;padding:8px 0px 0px 4px;'
        "
      >
        <label
          class=""
          :style="$q.screen.lt.sm ? 'text-align:left;' : 'text-align:right;'"
          style="display:block;width:126px;margin-right:2px;font-size:16px;padding-top:10px;"
          ><span class="required">＊</span>付款對象:
        </label>
        <div
          class=""
          style="display:flex;flex:1;margin-left:3px;"
          :style="
            $q.screen.lt.sm ? 'flex-direction:column;' : 'flex-direction:row;'
          "
        >
          <q-option-group
            style="margin-left:-12px;"
            v-model="subForm.payment_type"
            :options="personOptions"
            inline
            type="radio"
            class=""
          />
          <q-select
            v-model="subForm.bank_accounts_company"
            behavior="menu"
            outlined
            :options="paymentPerson"
            dense
            emit-value
            map-options
            option-label="label"
            option-value="value"
            ref="isRequiredarea_v1"
            style="flex:1;margin-left:10px;"
            :style="
              $q.screen.lt.sm
                ? 'margin-top:6px;margin-right:0px;margin-left:0px;'
                : ''
            "
            hide-bottom-space
            :rules="[(val) => !!val || '此欄位為必選項']"
          >
          </q-select>
        </div>
      </div>
      <div class="col-6 col-md-6">
        <com-select
          ref="comCheck"
          behavior="menu"
          v-model="subForm.bank_accounts_number"
          outlined
          :options="bankAccounts"
          dense
          emit-value
          map-options
          option-label="label"
          option-value="value"
          label="銀行帳號"
          :required-valid="true"
          hide-bottom-space
          :rules="[(val) => !!val || '此下拉1欄位為必填項']"
        ></com-select>
      </div>

      <div class="col-6 col-md-6">
        <com-select
          ref="comCheck"
          behavior="menu"
          v-model="subForm.current"
          outlined
          :options="currentOptions"
          dense
          emit-value
          map-options
          option-label="label"
          option-value="value"
          label="付款幣別"
          :required-valid="true"
          hide-bottom-space
          :rules="[(val) => !!val || '此下拉1欄位為必填項']"
        ></com-select>
      </div>
      <div class="col-6 col-md-6">
        <com-select
          ref="comCheck"
          behavior="menu"
          v-model="subForm.payment_condition"
          outlined
          :options="conditionOptions"
          dense
          emit-value
          map-options
          option-label="label"
          option-value="value"
          label="付款條件"
          :required-valid="false"
          hide-bottom-space
          :rules="[(val) => !!val || '此下拉1欄位為必填項']"
        ></com-select>
      </div>
    </div>
    <!-- ========== 報銷資訊[報銷卡>分攤部門卡] ========== -->
    <div class="row col-12 q-mb-sm title-border">
      <span class="title-text">報銷資訊</span>
    </div>

    <!-- 報銷卡(reimburseCard)  -->
    <q-markup-table
      v-for="(reimburseCard, rIdx) in subForm.reimburseInfos"
      :key="rIdx"
      :id="`q-markup-table-${rIdx}`"
      class="card-border q-mt-sm "
      style="padding:0px;margin-bottom:40px;"
    >
      <tr>
        <td
          class="row bg-mainGreen text-mainWhite "
          style="border: 1px solid rgba(24, 166, 138, 0.336);padding-bottom:0px;margin-bottom:0px;"
        >
          <div
            class="col-12 text-center title-text"
            style="border-radius:8px 8px 0px 0px; padding:6px;position:relative;"
          >
            報銷項目{{ rIdx + 1 }}
            <div class="" style="position:absolute;top:4px;right:8px;">
              <q-btn
                color="white"
                icon="delete"
                class="text-16px"
                style="font-weight:bold;"
                label="刪除"
                flat
                @click="delReimburseCard(rIdx)"
              />
            </div>
          </div>
        </td>
        <td
          class="row"
          style="padding-top:0px;"
          :style="$q.screen.lt.sm ? 'padding:2px;margin:1px;' : ''"
        >
          <div class="col-12 col-sm-4  col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  付款摘要
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.payment_desc }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  Account Group
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.account_group }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  關鍵字
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.keyword }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-8 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  費用類別
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.charge_type }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  合約編號
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.contract_number }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-4  col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  付款金額(TWD)
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.payment_amount }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  數量
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.count }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  單價(TWD)
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.price }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-4  col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  是否需要列管?
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.is_need ? "Yes" : "No" }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  資產管理員
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.asset_manager }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  發票稅款類型
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.invoice_tax_type }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-4  col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  稅款由廠商支付?
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.tax_by_firm }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  稅金
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.tax }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  發票日期
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.invoice_date }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  發票號碼
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.invoice_number }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="reimburse-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="reimburse-card-col-left">
                  發票形式
                </q-card-section>
                <q-card-section class="reimburse-card-col-right">
                  {{ reimburseCard.invoice_type }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12">
            <q-btn
              color="primary"
              icon="edit"
              class="text-16px"
              label="編輯報銷項目"
              style="margin-top:6px;font-weight:bold;"
              :style="$q.screen.lt.sm ? 'float:left;' : 'float:right;'"
              flat
              @click="openAddReimburse(reimburseCard, rIdx)"
            />
          </div>
        </td>
      </tr>
      <tr class="row">
        <td
          class="row col-12 text-left text-mainGreen"
          style="font-size:20px;padding-bottom:0px;"
          :style="$q.screen.lt.sm ? 'padding:4px;margin:0px;;' : ''"
        >
          分攤說明
        </td>
      </tr>
      <div
        class=""
        style="display:flex;min-height:40px;padding:0px 0px 0px 4px;"
      >
        <label
          :style="$q.screen.lt.sm ? 'margin-left:2px;' : 'margin-left:20px;'"
          style="margin-right:2px;font-size:16px;text-align:right;padding-right:6px;padding-top:8px;"
          ><div class="">上傳附件提供分攤資訊:</div>
        </label>
        <div class="" style="display:flex;flex:1;margin-left:3px;">
          <q-option-group
            style="margin-left:-12px;"
            v-model="subForm.payment_type"
            :options="YNOptions"
            inline
            type="radio"
            class=""
          />
        </div>
      </div>
      <tr class="row">
        <!-- 分攤部門卡 (apportionCard)-->
        <td
          v-for="(apportionCard, index) in reimburseCard.apportionArr"
          :key="index"
          class="row q-ma-md apportion-card "
          :style="
            $q.screen.lt.sm
              ? 'padding:0px;margin:4px;'
              : 'padding:0px;margin-top:8px;'
          "
        >
          <div
            class="col-12 col-md-12 "
            style="margin:0px;overflow:hidden;border-radius:8px 8px 0px 0px;border:none;background-color:#68B09A;"
          >
            <q-card
              style="background-color:transparent;margin:0px;border-radius:8px 8px 0px 0px;border:none;"
            >
              <q-item>
                <q-item-section class="">
                  <q-item-label
                    style="font-weight:bold;color:#fff;font-size:18px;"
                    >分攤項目{{ index + 1 }}
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  <span class="required">＊</span>Site
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <q-select
                    v-model="apportionCard.site"
                    behavior="menu"
                    outlined
                    :options="siteOptions"
                    dense
                    emit-value
                    map-options
                    option-label="label"
                    option-value="value"
                    hide-bottom-space
                    :rules="[(val) => !!val || '此欄位為必選項']"
                  >
                  </q-select>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  <span class="required">＊</span>部門
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <q-select
                    v-model="apportionCard.department"
                    behavior="menu"
                    outlined
                    :options="departmentOptions"
                    dense
                    emit-value
                    map-options
                    option-label="label"
                    option-value="value"
                    hide-bottom-space
                    :rules="[(val) => !!val || '此欄位為必選項']"
                  >
                  </q-select>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  分攤之成本中心
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <!-- {{apportionCard.apportion_cost_center}} -->
                  <span class="apportion-card-col-right-text">{{
                    apportionCostCenter(0, index)
                  }}</span>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  專案代碼
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <q-select
                    v-model="apportionCard.project_code"
                    behavior="menu"
                    outlined
                    :options="projectCodeOptions"
                    dense
                    emit-value
                    map-options
                    option-label="label"
                    option-value="value"
                    hide-bottom-space
                    :rules="[(val) => !!val || '此欄位為必選項']"
                  >
                  </q-select>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  部門會簽人
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <span class="apportion-card-col-right-text">{{
                    apportionCard.department_approver
                  }}</span>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  專案負責人
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <span class="apportion-card-col-right-text">{{
                    apportionCard.project_owner
                  }}</span>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  <span class="required">＊</span>金額
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <q-input
                    v-model="apportionCard.amount"
                    type="number"
                    min="0"
                    outlined
                    dense
                  >
                  </q-input>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  <span class="required">＊</span>百分比(%)
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <q-input
                    v-model="apportionCard.percentage"
                    type="number"
                    min="0"
                    outlined
                    dense
                  >
                    <template v-slot:append>
                      %
                    </template>
                  </q-input>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  Charge Bank
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <span class="apportion-card-col-right-text">{{
                    apportionCard.charge_bank
                  }}</span>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 ">
            <q-card class="apportion-card-col" flat>
              <q-card-section horizontal>
                <q-card-section class="apportion-card-col-left">
                  請款原因
                </q-card-section>
                <q-card-section class="apportion-card-col-right">
                  <q-select
                    v-model="apportionCard.reason"
                    outlined
                    behavior="menu"
                    :options="reasonOptions"
                    dense
                    emit-value
                    map-options
                    option-label="label"
                    option-value="value"
                  >
                  </q-select>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-8 ">
            <q-btn
              color="primary"
              icon="delete"
              size="lg"
              label="刪除"
              style="margin-top:6px;"
              :style="$q.screen.lt.sm ? 'float:left;' : 'float:right;'"
              flat
              @click="delApportionItem(rIdx, index)"
            />
          </div>
        </td>
        <div class="col-12 col-md-3 q-mb-sm">
          <q-btn
            label="新增分攤"
            :style="
              $q.screen.lt.sm
                ? 'margin-left:10px;width:150px;margin-top:8px;margin-bottom:10px;'
                : 'margin-left:20px;width:150px;'
            "
            class="btn-yellow text-16px"
            @click="addApportionItem(rIdx)"
          />
        </div>
      </tr>
    </q-markup-table>

    <div class="row q-mb-sm q-col-gutter-x-sm q-col-gutter-y-sm">
      <div class="col-12 q-pa-sm">
        <!-- 預設 -->

        <q-btn
          v-if="!subForm.reimburseInfos.length"
          size="md"
          icon="add"
          label="新增報銷項目"
          style="padding:20px;"
          class="btn-grey btn-w-100"
          @click="openAddReimburse()"
        />

        <!-- 已有新增 -->

        <q-btn
          v-else
          icon="add"
          label="新增報銷項目"
          style="margin-top:8px;"
          :style="$q.screen.lt.sm ? 'margin-left:0px;' : 'margin-left: 45%;'"
          :class="$q.screen.lt.sm ? 'btn-w-100' : 'btn-w-200px'"
          class="btn-green text-16px"
          @click="openAddReimburse()"
        />
      </div>
    </div>
    <!-- ========== 項目總和 ========== -->
    <div
      v-if="subForm.reimburseInfos.length"
      class="row q-mb-sm q-col-gutter-x-sm q-col-gutter-y-sm "
    >
      <div
        class="container-center "
        style="margin:20px auto 10px auto;"
        :style="$q.screen.lt.sm ? 'width:100%;' : 'width:30vw;'"
      >
        <q-list style="width:100%;">
          <q-item class="">
            <q-item-section>
              <q-item-label class="title-text text-green"
                >項目總和</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item class="subtitle-border">
            <q-item-section>
              <q-item-label
                :class="
                  $q.screen.lt.sm ? 'subtitle-mobile-text' : 'subtitle-text'
                "
                >總付款金額</q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-item-label
                :class="
                  $q.screen.lt.sm
                    ? 'subtitle-mobile-text-value '
                    : 'subtitle-text-value'
                "
                >TWD {{ subForm.reimburseInfoTotalAmount }}</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item class="subtitle-border">
            <q-item-section>
              <q-item-label
                :class="
                  $q.screen.lt.sm ? 'subtitle-mobile-text' : 'subtitle-text'
                "
                >分攤會簽人</q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-item-label
                :class="
                  $q.screen.lt.sm
                    ? 'subtitle-mobile-text-value '
                    : 'subtitle-text-value'
                "
                >NA</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item class="subtitle-border">
            <q-item-section>
              <q-item-label
                :class="
                  $q.screen.lt.sm ? 'subtitle-mobile-text' : 'subtitle-text'
                "
                >費用類別會簽人</q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-item-label
                :class="
                  $q.screen.lt.sm
                    ? 'subtitle-mobile-text-value '
                    : 'subtitle-text-value'
                "
                >NA</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item class="subtitle-border">
            <q-item-section>
              <q-item-label
                :class="
                  $q.screen.lt.sm ? 'subtitle-mobile-text' : 'subtitle-text'
                "
                >資產管理會簽人</q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-item-label
                :class="
                  $q.screen.lt.sm
                    ? 'subtitle-mobile-text-value '
                    : 'subtitle-text-value'
                "
                >{{ finalAssetManager }}</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <!-- ========== 採購流程例外 ========== -->
    <div class="row col-12 q-mb-sm title-border">
      <span class="title-text">採購流程例外</span>
    </div>

    <div
      class="col-12 col-md-6 "
      style="display:flex;min-height:40px;"
      :style="
        $q.screen.lt.sm
          ? 'flex-direction:column;padding:0px 0px 0px 4px;'
          : 'flex-direction:row;padding:8px 0px 0px 4px;'
      "
    >
      <label
        :style="$q.screen.lt.sm ? 'text-align:left;' : 'text-align:right;'"
        style="display:block;width:160px;margin-right:2px;font-size:16px;padding-top:10px;"
        ><span class="required">＊</span>採購流程例外原因:
      </label>
      <div
        class=""
        style="display:flex;flex:1;margin-left:3px;"
        :style="
          $q.screen.lt.sm ? 'flex-direction:column;' : 'flex-direction:row;'
        "
      >
        <q-list
          :style="
            $q.screen.lt.sm ? 'width:100%;padding-left:0px;' : 'width:50vw;'
          "
        >
          <q-item
            style="padding:2px 0px;"
            :style="$q.screen.lt.sm ? 'padding-left:0px;' : ''"
          >
            <q-item-section avatar>
              <q-checkbox
                v-model="subForm.exception_reasons"
                val="1"
                color="primary"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-16px">(1)緊急需求。</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            style="padding:2px 0px;"
            :style="$q.screen.lt.sm ? 'padding-left:0px;' : ''"
          >
            <q-item-section avatar>
              <q-checkbox
                v-model="subForm.exception_reasons"
                val="2"
                color="primary"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-16px"
                >(2)已經採購事先議價，並同意以非請購請款系統核銷。</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item
            class=""
            style="padding:2px 0px;"
            :style="$q.screen.lt.sm ? 'padding-left:0px;' : ''"
          >
            <q-item-section class="" style="position:relative;" avatar>
              <q-checkbox
                v-model="subForm.exception_reasons"
                val="3"
                color="primary"
                style="position:absolute;top:-8px;"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-16px">(3)其他原因，請說明</q-item-label>
              <q-item-label>
                <q-input
                  v-model="subForm.exception_other_reason"
                  outlined
                  dense
                >
                </q-input>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            style="padding:2px 0px;"
            :style="$q.screen.lt.sm ? 'padding-left:10px;' : ''"
          >
            <q-item-section class="text-16px">
              報銷金額已達請購標準，應已請購程序申請；若出於原因(1)或(3)，請檢附上級主管核准郵件；若選擇原因(2)請會簽Buyer。
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <!-- ========== 附件(主管核准信件) ========== -->
    <div
      class="col-12 col-md-6 "
      style="display:flex;min-height:40px;"
      :style="
        $q.screen.lt.sm
          ? 'flex-direction:column;padding:0px 0px 0px 4px;'
          : 'flex-direction:row;padding:8px 0px 0px 4px;'
      "
    >
      <label
        :style="$q.screen.lt.sm ? 'text-align:left;' : 'text-align:right;'"
        style="display:block;width:160px;margin-right:2px;font-size:16px;padding-top:10px;"
        ><span class="required">＊</span>附件(主管核准信件):
      </label>
      <div
        class=""
        style="display:flex;flex:1;margin-left:3px;"
        :style="
          $q.screen.lt.sm ? 'flex-direction:column;' : 'flex-direction:column;'
        "
      >
        <!-- 附件(主管核准信件) Table  -->
        <q-table
          :data="tableDatas"
          :columns="tableColumns"
          row-key="name"
          no-data-label="目前無任何上傳資料"
          :hide-pagination="true"
          :style="
            $q.screen.lt.sm
              ? 'width:100%;padding-left:0px;'
              : 'width:50vw;margin-left:10px;'
          "
        >
          <template v-slot:top-right>
            <q-btn
              size="sm"
              icon="add"
              label="新增"
              :class="$q.screen.lt.sm ? 'btn-w-100' : 'btn-w-100px'"
              class="btn-yellow "
            />
          </template>
          <template v-slot:no-data="{ icon, message, filter }">
            <div class="full-width row flex-center text-accent q-gutter-sm">
              <q-icon size="2em" style="color:#d3d3d3;" name="warning" />
              <span class="text-16px" style="color:black;">
                {{ message }}
              </span>
            </div>
          </template>
        </q-table>
      </div>
    </div>

    <!-- ========== 附件 ========== -->
    <div class="row col-12 q-mb-sm q-mt-md title-border">
      <span class="title-text">附件</span>
    </div>

    <div
      class="col-12 col-md-6 "
      style="display:flex;min-height:40px;"
      :style="
        $q.screen.lt.sm
          ? 'flex-direction:column;padding:0px 0px 0px 4px;'
          : 'flex-direction:row;padding:8px 0px 0px 4px;'
      "
    >
      <label
        :style="$q.screen.lt.sm ? 'text-align:left;' : 'text-align:right;'"
        style="display:block;width:160px;margin-right:2px;font-size:16px;padding-top:10px;"
        >附件:
      </label>
      <div
        class=""
        style="display:flex;flex:1;margin-left:3px;"
        :style="
          $q.screen.lt.sm ? 'flex-direction:column;' : 'flex-direction:column;'
        "
      >
        <!-- 附件(主管核准信件) Table  -->
        <q-table
          title=""
          :data="tableAttachedDatas"
          :columns="tableAttachedColumns"
          row-key="name"
          no-data-label="目前無任何上傳資料"
          :hide-pagination="true"
          :style="
            $q.screen.lt.sm
              ? 'width:100%;padding-left:0px;'
              : 'width:50vw;margin-left:10px;'
          "
        >
          <template v-slot:top-right>
            <q-btn
              size="sm"
              icon="add"
              label="新增"
              :class="$q.screen.lt.sm ? 'btn-w-100' : 'btn-w-100px'"
              class="btn-yellow "
            />
          </template>
          <template v-slot:no-data="{ icon, message, filter }">
            <div class="full-width row flex-center text-accent q-gutter-sm">
              <q-icon size="2em" style="color:#d3d3d3;" name="warning" />
              <span class="text-16px" style="color:black;">
                {{ message }}
              </span>
            </div>
          </template>
        </q-table>
      </div>
    </div>

    <div class="row q-mb-sm q-mt-sm q-col-gutter-x-sm q-col-gutter-y-sm">
      <div
        class="container-center "
        :class="$q.screen.lt.sm ? 'btn-w-100' : 'btn-w-200px'"
        :style="$q.screen.lt.sm ? '' : 'margin:20px auto 10px auto;'"
      >
        <!-- 送出 -->

        <q-btn
          label="送出"
          :class="$q.screen.lt.sm ? 'btn-w-100' : 'btn-w-200px'"
          class="btn-green text-16px "
        />
      </div>
    </div>

    <!-- 報銷項目 dialog  -->
    <q-dialog v-model="reimburseDialogShow">
      <q-card class="" style="width: 700px; max-width: 80vw;">
        <q-card-section class="bg-primary text-white text-center">
          <div style="font-size:24px;font-weight:bold;">新增報銷項目</div>
        </q-card-section>

        <q-separator />
        <div
          class=" row q-pa-md q-col-gutter-x-sm q-col-gutter-y-sm"
          :style="$q.screen.lt.sm ? '' : 'padding-left:0px;'"
        >
          <!-- 
            payment_desc:"",//付款摘要
            keyword:"",//關鍵字
            contract_number:"",//合約編號
            charge_type:"",//費用類別
            payment_amount:"",//付款金額(TWD)
            count:"",//數量
            price:"",//單價(TWD)
            invoice_tax_type:"",//發票稅款類型
            tax:"",//稅金
            invoice_type:"",//發票形式
            invoice_date:"",//發票日期
            invoice_number:"",//發票號碼
            is_need:true,// 是否需要列管
           -->
          <div class="col-12">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.payment_desc"
              label="付款摘要"
              :required-valid="true"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.keyword"
              label="關鍵字"
              :required-valid="false"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.contract_number"
              label="合約編號"
              :required-valid="false"
            ></com-input>
          </div>
          <div class="col-12 col-sm-10">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.charge_type"
              label="費用類別"
              :required-valid="true"
            ></com-input>
          </div>
          <div class="col-12 col-sm-2" style="">
            <q-btn color="primary" label="選擇類別">
              <q-menu :anchor="$q.screen.lt.sm ?'bottom left':'top right'" self="top left" class=" q-pa-sm this">
                <div class="" :style="$q.screen.lt.sm ?'width:270px;':'width:300px;'">
                  <!-- width:200px;height:300px; -->
                  <div class="subtitle-text text-center q-pa-sm">選擇類別</div>
                  <div style="overflow-y:auto;" :style="$q.screen.lt.sm ?'height:280px;':'height:400px;'">
                    <q-tree
                      class=" q-pa-md"
                      :nodes="treeOptions"
                      node-key="label"
                      no-connectors
                      :expanded.sync="expanded"
                      default-expand-all
                    >
                      <template v-slot:default-header="prop">
                        <div class="row items-center">
                          <q-icon
                            name="folder"
                            size="28px"
                            class="q-mr-sm text-mainYellow"
                          />
                          <div class="text-weight-bold">
                            {{ prop.node.label }}
                          </div>
                        </div>
                      </template>
                      <template v-slot:header-input="prop">
                        <div class="row items-center">
                          <q-checkbox
                            class=""
                            style="margin-bottom:-10px;"
                            v-model="treeSelected"
                            :val="prop.node"
                            :label="prop.node.label"
                          />
                        </div>
                      </template>
                    </q-tree>
                  </div>
                  <div class="row q-mb-sm" :style="$q.screen.lt.sm ?'margin-bottom:4px;':''">
                    <div
                      class="col-12 col-sm-12 "
                      style="display:flex;justify-content:center;"
                    >
                      <q-btn
                        color="grey-4 "
                        text-color="black"
                        label="取消"
                        v-close-popup
                        style="margin-right:10px;"
                      />
                      <q-btn
                        color="primary"
                        label="確認"
                        v-close-popup
                        @click="getAllNodes"
                      />
                    </div>
                  </div>
                </div>
                <!-- <q-card class="this">
                  <q-card-section>
                    選擇類別
                  </q-card-section>

                  <q-card-section >

                    <q-tree
                    style="height:450px;overflow-y:auto;overflow-x:auto;"
                    :nodes="treeOptions"
                    node-key="label"
                    no-connectors
                    tick-strategy="leaf"
                    :ticked.sync="ticked"
                    :expanded.sync="expanded"
                    @update:ticked="updateTicked"
                  >
                   
                  </q-tree>
      
                    <q-tree
                      
                      class=" q-pa-md"
                      :nodes="treeOptions"
                      node-key="label"
                      no-connectors
                      :expanded.sync="expanded"
                      default-expand-all
                    >
                      <template v-slot:header-input="prop">
                        <div class="row items-center">
             

                          <q-checkbox
                            class=""
                            style="margin-bottom:-10px;"
                            v-model="treeSelected"
                            :val="prop.node.id"
                            :label="prop.node.label"
                          />
                          
                        </div>
                      </template>

                    </q-tree>
                  </q-card-section>

                  <q-separator dark />

                  <q-card-actions>
                    <q-btn flat>取消</q-btn>
                    <q-btn flat>確定</q-btn>
                  </q-card-actions>
                </q-card> -->
              </q-menu>
            </q-btn>

            <q-btn
              flat
              color="primary"
              label="查看類別總表"
              style="padding-bottom:0px;font-size:10px;border-bottom:1px solid grey; border:none;"
            />
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.payment_amount"
              label="付款金額"
              type="number"
              :required-valid="true"
              hint="付款金額應包含稅款"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.count"
              type="number"
              label="數量"
              :required-valid="true"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.price"
              type="number"
              label="單價(TWD)"
              :required-valid="true"
              hint="付款金額應包含稅款"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-select
              ref="comCheck"
              behavior="menu"
              v-model="newReimburseForm.invoice_tax_type"
              outlined
              :options="invoiceTaxTypeOptions"
              dense
              emit-value
              map-options
              option-label="label"
              option-value="value"
              label="發票稅款類型"
              :required-valid="true"
              hide-bottom-space
              :rules="[(val) => !!val || '此下拉1欄位為必填項']"
            ></com-select>
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              v-model="newReimburseForm.tax"
              type="number"
              label="稅金"
              :required-valid="true"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-select
              ref="comCheck"
              behavior="menu"
              v-model="newReimburseForm.invoice_type"
              outlined
              :options="invoiceTypeOptions"
              dense
              emit-value
              map-options
              option-label="label"
              option-value="value"
              label="發票形式"
              :required-valid="true"
              hide-bottom-space
              :rules="[(val) => !!val || '此下拉1欄位為必填項']"
            ></com-select>
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              type="date"
              stack-label
              v-model="newReimburseForm.invoice_date"
              label="發票日期"
              :required-valid="true"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-input
              ref="comCheck"
              type="text"
              v-model="newReimburseForm.invoice_number"
              label="發票號碼"
              :required-valid="true"
            ></com-input>
          </div>
          <div class="col-12 col-sm-6">
            <com-select
              ref="comCheck"
              behavior="menu"
              v-model="newReimburseForm.is_need"
              outlined
              :options="YNOptions"
              dense
              emit-value
              map-options
              option-label="label"
              option-value="value"
              label="是否需要列管"
              :required-valid="true"
              hide-bottom-space
              :rules="[
                (val) => (val && val.length > 0) || '此下拉1欄位為必填項',
              ]"
            ></com-select>
          </div>
          <div
            class="col-12 col-sm-12"
            style="display:flex;justify-content:center;"
          >
            <q-btn
              color="grey-4"
              text-color="black"
              label="取消"
              @click="reimburseDialogShow = false"
              style="margin-right:10px;"
            />
            <q-btn color="primary" label="確認" @click="addReimburse" />
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>

import ComInput from "@/components/Common/form/ComInput";
import ComSelect from "@/components/Common/form/ComSelect";
import {
  payMainOptions,
  payTypeOptions,
  bankAccounts,
  currentOptions,
  conditionOptions,
  personOptions,
  paymentPerson, // 匯款對象
  invoiceTypeOptions, // 發票形式
  invoiceTaxTypeOptions, // 發票稅款類型
  YNOptions, // Yes|No
  siteOptions, // 分攤之Site
  departmentOptions, // 分攤之部門
  projectCodeOptions, // 專案代碼
  reasonOptions, // 請款原因
  treeOptions, // 選擇類別
} from "@/utils/common/dropdown-list.js";

export default {
  // 局部注冊的組件
  components: { ComInput, ComSelect },
  data() {
    return {
      payMainOptions, // 付款主體
      payTypeOptions, // 付款型式
      paymentPerson, // 匯款對象
      bankAccounts, // 銀行帳號
      currentOptions, // 付款幣別
      conditionOptions, // 付款條件
      personOptions, // 付款對象
      invoiceTaxTypeOptions, // 發票稅款類型
      invoiceTypeOptions, // 發票形式
      YNOptions, // Yes|No
      siteOptions, // 分攤之Site
      departmentOptions, // 分攤之部門
      projectCodeOptions, // 專案代碼
      reasonOptions, // 請款原因
      treeOptions, // 選擇類別
      treeSelected: [],
      ticked: [],
      componyName: [],
      accountsNumber: [],
      reimburseDialogShow: false,
      is_invalid: false, //是否作廢
      // 報銷項目卡
      newReimburseForm: {
        payment_desc: "", //付款摘要
        keyword: "", //關鍵字
        contract_number: "", //合約編號
        charge_type: "", //費用類別
        payment_amount: 0, //付款金額(TWD)
        count: 0, //數量
        price: 0, //單價(TWD)
        invoice_tax_type: "", //發票稅款類型
        tax: 0, //稅金
        invoice_type: "", //發票形式
        invoice_date: "", //發票日期
        invoice_number: "", //發票號碼
        is_need: "", // 是否需要列管
      },
      //// 分攤資訊卡
      // apportionForm: {
      //   site: "", //site
      //   department: "", //部門
      //   project_code: "", //專案代碼
      //   amount: "", //金額
      //   percentage: "", //百分比(%)
      //   reason: "", //請款原因
      //   apportion_cost_center: "", //分攤之成本中心 [自動帶入]
      //   department_approver: "", //部門會簽人 [自動帶入]
      //   project_owner: "", //專案負責人 [自動帶入]
      // },
      // 採購例外附件Table
      tableColumns: [
        {
          name: "filename",
          align: "center",
          label: "檔案",
          field: "filename",
          style: "width: 200px",
        },
        {
          name: "desc",
          align: "center",
          label: "描述",
          field: "desc",
          style: "width: 200px",
        },
        {
          name: "uploader",
          align: "center",
          label: "上傳者",
          field: "uploader",
        },
        {
          name: "created_at",
          align: "center",
          label: "時間",
          field: "created_at",
        },
        { name: "steps", align: "center", label: "步驟", field: "steps" },
        { name: "btns", align: "center", label: "操作", field: "btns" },
      ],
      tableDatas: [
        {
          filename: "111",
          desc: "222",
          uploader: "333",
          created_at: "444",
          steps: "555",
          btns: "666",
        },
      ],
      // 附件Table Attached
      tableAttachedColumns: [
        {
          name: "filename",
          align: "center",
          label: "檔案",
          field: "filename",
          style: "width: 200px",
        },
        {
          name: "desc",
          align: "center",
          label: "描述",
          field: "desc",
          style: "width: 200px",
        },
        {
          name: "uploader",
          align: "center",
          label: "上傳者",
          field: "uploader",
        },
        {
          name: "created_at",
          align: "center",
          label: "時間",
          field: "created_at",
        },
        { name: "steps", align: "center", label: "步驟", field: "steps" },
        { name: "btns", align: "center", label: "操作", field: "btns" },
      ],
      tableAttachedDatas: [
        // {
        //   filename: "這是附件第一個檔案",
        //   desc: "這是附件第一個檔案這是附件第一個檔案",
        //   uploader: "user1",
        //   created_at: "444",
        //   steps: "555",
        //   btns: "666",
        // },
      ],
      reimburseInfosEditIdx: "",
      subForm: {
        // ========== Reimbursement 申請報銷 ==========
        applicant_self: "Mash Huang (黃志豪)", //填單人
        applicant_status: "Editting", // 狀態
        approver: "Mash Huang (黃志豪)", // 簽核人員
        created_date: "", //建立日期
        form_id: "", //單號
        // ========== Applicant 申請人資訊 ==========
        applicant_code: "60389", // 員工代號 applicant_code
        name: "Mash Huang (黃志豪)", // 姓名 name
        department: "ARHT,IT/IT1", // 部門 department
        extension: "18056", // 分機號碼 extension
        cost_center: "AH100701", // 成本中心 cost_center
        // ========== BaseInfo 基本資訊 ==========
        payment_main: "", // 付款主體
        payment_type: "", // 付款型式
        payment_person: "", // 付款對象
        bank_accounts_company: "", // 銀行帳號
        bank_accounts_number: "", // 銀行帳號
        current: "", // 付款幣別
        payment_condition: "", // 付款條件
        // ========== Reimburse 報銷資訊 ==========
        reimburseInfoTotalAmount: 0,
        reimburseInfos: [
          // {
          //   payment_desc:
          //     "付款摘要付款摘要付款摘要付款摘要付款摘要付款摘要付款摘要付款摘要", //付款摘要
          //   keyword: "關鍵字關鍵字關鍵字", //關鍵字
          //   contract_number: "NA", //合約編號
          //   charge_type: "資訊類別/網路設備/網路設備", //費用類別
          //   payment_amount: 100000, //付款金額(TWD)
          //   count: 10, //數量
          //   price: 10000, //單價(TWD)
          //   invoice_tax_type: "VAT 5%", //發票稅款類型
          //   tax: 4762, //稅金
          //   invoice_type: "電子", //發票形式
          //   invoice_date: "2021-11-25", //發票日期
          //   invoice_number: "AA-12322567", //發票號碼
          //   is_need: true, // 是否需要列管
          //   account_group: "Account Group [自動帶入]", //Account Group [自動帶入]
          //   asset_manager: "Ken-YW Hsu", //資產管理員 [自動帶入]
          //   tax_by_firm: "NA", // 稅款由廠商支付? [自動帶入]
          //   apportionArr: [
          //     {
          //       site: "", //site
          //       department: "", //部門
          //       project_code: "", //專案代碼
          //       amount: "", //金額
          //       percentage: "", //百分比(%)
          //       reason: "", //請款原因
          //       apportion_cost_center: "", //分攤之成本中心 [自動帶入]
          //       department_approver: "部門會簽人 [自動帶入]", //部門會簽人 [自動帶入]
          //       project_owner: "專案負責人 [自動帶入]", //專案負責人 [自動帶入]
          //       charge_bank: "Charge Bank [自動帶入]", //Charge Bank [自動帶入]
          //     },
          //     {
          //       site: "", //site
          //       department: "", //部門
          //       project_code: "", //專案代碼
          //       amount: "", //金額
          //       percentage: "", //百分比(%)
          //       reason: "", //請款原因
          //       apportion_cost_center: "", //分攤之成本中心 [自動帶入]
          //       department_approver: "部門會簽人 [自動帶入]", //部門會簽人 [自動帶入]
          //       project_owner: "專案負責人 [自動帶入]", //專案負責人 [自動帶入]
          //       charge_bank: "Charge Bank [自動帶入]", //Charge Bank [自動帶入]
          //     },
          //   ],
          // },
        ],
        // ========== 採購流程例外原因 ==========
        exception_reasons: [],
        exception_other_reason: "",
        // ========== 附件 ==========
      },
    };
  },

  // 計算屬性
  computed: {
    //
    apportionCostCenter() {
      return function(index1 = 0, index2) {
        if (
          this.subForm.reimburseInfos[index1].apportionArr[index2].site ===
            "" ||
          this.subForm.reimburseInfos[index1].apportionArr[index2]
            .department === ""
        )
          return;
        let siteItem = this.siteOptions.find((item) => {
          return (
            item.value ===
            this.subForm.reimburseInfos[index1].apportionArr[index2].site
          );
        });

        let departmentItem = this.departmentOptions.find((item) => {
          return (
            item.value ===
            this.subForm.reimburseInfos[index1].apportionArr[index2].department
          );
        });
        console.log("departmentItem", departmentItem);

        this.subForm.reimburseInfos[index1].apportionArr[
          index2
        ].apportion_cost_center =
          this.subForm.reimburseInfos[index1].apportionArr[index2].site +
          " " +
          this.subForm.reimburseInfos[index1].apportionArr[index2].department;
        return siteItem.label + " " + departmentItem.label;
      };
    },
    //
    finalAssetManager() {
      return this.subForm.reimburseInfos[0].asset_manager;
    },
    reimburseInfosLength() {
      return this.subForm.reimburseInfos.length;
    },
    // finalTotalAmount() {
    //   let total = 0;
    //   for (let i = 0; this.subForm.reimburseInfos.length < i; i++) {
    //     console.log("total=>", this.subForm.reimburseInfos[i].payment_amount);
    //     total += parseInt(this.subForm.reimburseInfos[i].payment_amount);
    //   }
    //   // this.subForm.reimburseInfos.forEach((item) => {
    //   //   total += parseInt(item.payment_amount);
    //   // });

    //   return total;
    // },
  },
  // 偵聽器
  watch: {
    // "subForm.bank_accounts_company": {
    //   handler(newName, oldName) {
    //     if (newName === null) return [];
    //     if (newName !== oldName) {
    //       this.subForm.bank_accounts_number = null;
    //     }
    //     let index = this.componyName.findIndex((obj) => obj.value === newName);
    //     this.accountsNumber = this.bankAccounts[index].children;
    //   },
    //   immediate: true,
    // },
    treeSelected: {
      handler(newName, oldName) {
        if (newName.length > 1) {
          newName.splice(0, 1);
          // console.log('newName',newName)
        }
      },
      immediate: true,
    },
    ticked: {
      handler(newName, oldName) {
        if (newName.length > 1) {
          newName.splice(0, 1);
          // console.log('newName',newName)
        }
      },
      immediate: true,
    },
  },
  // 組件方法
  methods: {
    //
    openAddReimburse(reimburseCard, rIdx) {
      this.reimburseDialogShow = true;
      if (!reimburseCard) return;
      //
      this.reimburseInfosEditIdx = rIdx;
      //
      this.newReimburseForm.payment_desc = reimburseCard.payment_desc; //付款摘要
      this.newReimburseForm.keyword = reimburseCard.keyword; //關鍵字
      this.newReimburseForm.contract_number = reimburseCard.contract_number; //合約編號
      this.newReimburseForm.charge_type = reimburseCard.charge_type; //費用類別
      this.newReimburseForm.payment_amount = reimburseCard.payment_amount; //付款金額(TWD)
      this.newReimburseForm.count = reimburseCard.count; //數量
      this.newReimburseForm.price = reimburseCard.price; //單價(TWD)
      this.newReimburseForm.invoice_tax_type = reimburseCard.invoice_tax_type; //發票稅款類型
      this.newReimburseForm.tax = reimburseCard.tax; //稅金
      this.newReimburseForm.invoice_type = reimburseCard.invoice_type; //發票形式
      this.newReimburseForm.invoice_date = reimburseCard.invoice_date; //發票日期
      this.newReimburseForm.invoice_number = reimburseCard.invoice_number; //發票號碼
      this.newReimburseForm.is_need = reimburseCard.is_need; // 是否需要列管
    },
    resetReimburseForm() {
      this.treeSelected = [];

      this.newReimburseForm = {
        payment_desc: "", //付款摘要
        keyword: "", //關鍵字
        contract_number: "", //合約編號
        charge_type: "", //費用類別
        payment_amount: 0, //付款金額(TWD)
        count: 0, //數量
        price: 0, //單價(TWD)
        invoice_tax_type: "", //發票稅款類型
        tax: 0, //稅金
        invoice_type: "", //發票形式
        invoice_date: "", //發票日期
        invoice_number: "", //發票號碼
        is_need: "", // 是否需要列管
      };
    },
    // 新增報銷項目
    addReimburse() {
      // this.newReimburseForm.payment_amount =
      //   this.newReimburseForm.count * this.newReimburseForm.price;

      // 修改
      if (this.reimburseInfosEditIdx !== "") {
        this.subForm.reimburseInfos[
          this.reimburseInfosEditIdx
        ] = this.newReimburseForm;
        this.reimburseInfosEditIdx = "";
        this.resetReimburseForm();
        // this.tagScrollById();
        return (this.reimburseDialogShow = false);
      }

      // 新增
      this.subForm.reimburseInfoTotalAmount = 0;
      this.subForm.reimburseInfos.push({
        payment_desc: this.newReimburseForm.payment_desc, //付款摘要
        keyword: this.newReimburseForm.keyword, //關鍵字
        contract_number: this.newReimburseForm.contract_number, //合約編號
        charge_type: this.newReimburseForm.charge_type, //費用類別
        payment_amount: this.newReimburseForm.payment_amount, //付款金額(TWD)
        count: this.newReimburseForm.count, //數量
        price: this.newReimburseForm.price, //單價(TWD)
        invoice_tax_type: this.newReimburseForm.invoice_tax_type, //發票稅款類型
        tax: this.newReimburseForm.tax, //稅金
        invoice_type: this.newReimburseForm.invoice_type, //發票形式
        invoice_date: this.newReimburseForm.invoice_date, //發票日期
        invoice_number: this.newReimburseForm.invoice_number, //發票號碼
        is_need: this.newReimburseForm.is_need, // 是否需要列管
        account_group: "Account Group [自動帶入]", //Account Group [自動帶入]
        asset_manager: "Ken-YW Hsu", //資產管理員 [自動帶入]
        tax_by_firm: "NA", // 稅款由廠商支付? [自動帶入]
        apportionArr: [],
      });

      // 計算total
      this.subForm.reimburseInfos.forEach((item) => {
        this.subForm.reimburseInfoTotalAmount += parseInt(item.payment_amount);
      });

      this.resetReimburseForm();

      this.reimburseDialogShow = false;
      // this.tagScrollById();
    },
    // 新增分攤
    addApportionItem(index) {
      this.subForm.reimburseInfos[index].apportionArr.push({
        site: "", //site
        department: "", //部門
        project_code: "", //專案代碼
        amount: "", //金額
        percentage: "", //百分比(%)
        reason: "", //請款原因
        apportion_cost_center: "", //分攤之成本中心 [自動帶入]
        department_approver: "部門會簽人 [自動帶入]", //部門會簽人 [自動帶入]
        project_owner: "專案負責人 [自動帶入]", //專案負責人 [自動帶入]
        charge_bank: "Charge Bank [自動帶入]", //Charge Bank [自動帶入]
      });
    },

    // 刪除報銷項目
    delReimburseCard(rIdx) {
      this.$q.notify({
        message: `確定刪除報銷項目${rIdx + 1}?`,
        color: "",
        position: "center",
        multiLine: true,
        actions: [
          { label: "取消", color: "yellow", handler: () => {} },
          {
            label: "確定",
            color: "yellow",
            handler: () => {
              this.subForm.reimburseInfos.splice(rIdx, 1);
            },
          },
        ],
      });
    },

    // 刪除報銷項目
    delApportionItem(rIdx, index) {
      this.subForm.reimburseInfos[rIdx].apportionArr.splice(rIdx, 1);
    },

    //
    updateTicked(e) {
      console.log(e);
    },

    // 確認選擇類別
    getAllNodes() {
      let node = this.treeSelected[0];
      return (this.newReimburseForm.charge_type =
        node.parent_label + node.label);
    },

    //
    tagScrollById() {
      let rId = this.subForm.reimburseInfos.length - 1;
      let strId = `#q-markup-table-${rId}`
      let table_tag =   document.querySelector(strId).scrollIntoView();
      // let table_tag = document.querySelector(`div#q-markup-table-${rId}`);
      // console.log("++++",`div#q-markup-table-${rId}`)
      // table_tag.scrollTop = -300;
    },
  },
  mounted() {
    
    this.$watch("this.subForm.reimburseInfoTotalAmount", function(
      newVal,
      oldVal
    ) {
      console.log("total=>", newVal);
    });
    this.$watch("reimburseInfosLength", function(
      newVal,
      oldVal
    ) {
      this.tagScrollById();
    });


  },
  updated(){
    
  },
  created() {
    let date = new Date();
    this.subForm.created_date = date.toLocaleString(); //date.toISOString().split('T')[0]
  },
};
</script>
<style lang="scss" scoped>
$mainGreen: #18a689;
$mainYellow: #f8ac59;
$mainDarkBlack: #383838;
$mainGrey: #e4e4e4;
$mainLightGrey: #f5f5f5;

.this2 {
  background-color: violet;
}

.container-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-border {
  border-bottom: 3px solid $mainGreen;
}

.subtitle-border {
  border-bottom: 2px solid #d3d3d3;
}

.title-text {
  font-size: 24px;
  font-weight: bold;
}
.subtitle-text {
  font-size: 20px;
  font-weight: bold;
}
.subtitle-text-value {
  font-size: 20px;
  color: black;
}

.subtitle-mobile-text {
  font-size: 18px;
  font-weight: bold;
}
.subtitle-mobile-text-value {
  font-size: 18px;
  color: black;
}

.text-16px {
  font-size: 16px;
}

.btn-yellow {
  background-color: $mainYellow;
  font-weight: bold;
  color: white;
}
.btn-green {
  background-color: $mainGreen;
  font-weight: bold;
  color: white;
}
.text-green {
  color: $mainGreen;
}

.btn-grey {
  background-color: $mainGrey;
  font-weight: bold;
  color: $mainDarkBlack;
}

.btn-w-100 {
  width: 100%;
}
.btn-w-200px {
  width: 200px;
}
.btn-w-100px {
  width: 100px;
}

.text-mainGreen {
  color: $mainGreen;
  font-weight: bold;
}

.text-mainWhite {
  color: #fff;
  font-weight: bold;
}

.text-mainYellow {
  color: $mainYellow;
  font-weight: bold;
}
.bg-mainGreen {
  background-color: $mainGreen;
}
.bg-mainYellow {
  background-color: $mainYellow;
}
// i.q-tree__icon.material-icons{
//   color:yellow!important;
// }
.required {
  color: red;
  font-size: 12px;
}
label {
  color: #000;
  font-size: 14px;
}

.card-border {
  border: 1px solid rgba(24, 166, 138, 0.336);
  border-radius: 6px;
}
.reimburse-card-col {
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 0px;
  width: 100%;
  display: flex;
  height: 50px;
}

.reimburse-card-col-right {
  font-size: 16px;
  padding-left: 16px;
  display: flex;

  justify-content: center;
  align-items: center;
}
.reimburse-card-col-left {
  background-color: $mainGrey;
  width: 130px;
  font-weight: bolder;
  font-size: 16px;
  padding-left: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
//
.apportion-card {
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 8px 8px 0px 0px;
  background-color: $mainLightGrey;
  margin-bottom: 8px;
}

.apportion-card-col {
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 0px;
}
.apportion-card-col-left {
  background-color: $mainLightGrey;
  font-weight: bolder;
  font-size: 16px;
  padding-left: 6px;
  width: 160px;
}
.apportion-card-col-right {
  width: 100%;
  padding: 8px 6px 0px 6px;
}
.apportion-card-col-right-text {
  font-size: 16px;
  padding-left: 6px;
  padding-top: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.input {
  padding: 0 7px;
  border: 3px solid #333;
}
</style>
