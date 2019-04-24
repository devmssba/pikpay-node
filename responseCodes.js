/**
 * Place for all response codes of API
 */

 /**
  * 
    0000 - Approved
    1001 - Card expired
    1002 - Card suspicious
    1003 - Card suspended
    1004 - Card stolen
    1005 - Card lost
    1011 - Card not found
    1012 - Cardholder not found
    1014 - Account not found
    1015 - Invalid request
    1016 - Not sufficient funds
    1017 - Previously reversed
    1018 - Previously reversed
    1019 - Further activity prevents reversal
    1020 - Further activity prevents void
    1021 - Original transaction has been voided
    1022 - Preauthorization is not allowed for this card
    1023 - Only full 3D authentication is allowed for this card
    1024 - Installments are not allowed for this card
    1025 - Transaction with installments can not be send as preauthorization
    1026 - Installments are not allowed for non ZABA cards
    1050 - Transaction declined
    1802 - Missing fields
    1803 - Extra fields exist
    1804 - Invalid card number
    1806 - Card not active
    1808 - Card not configured
    1810 - Invalid amount
    1811 - System error - database
    1812 - System error - transaction
    1813 - Cardholder not active
    1814 - Cardholder not configured
    1815 - Cardholder expired
    1816 - Original not found
    1817 - Usage limit reached
    1818 - Configuration error
    1819 - Invalid terminal
    1820 - Inactive terminal
    1821 - Invalid merchant
    1822 - Duplicate entity
    1823 - Invalid acquirer
    2000 - Internal error - host down
    2001 - Internal error - host timeout
    2002 - Internal error - invalid message
    2003 - Internal error - message format error
    2013 - 3D Secure error - invalid request
    3000 - Time expired
    3100 - Function not supported
    3200 - Timeout
    3201 - Authorization host not active
    3202 - System not ready
    4001 - 3D Secure error - ECI 7
    4002 - 3D Secure error - not 3D Secure, store policy
    4003 - 3D secure error - not authenticated
    5000 - Request in progress
    5018 - RISK: Minimum amount per transaction
    5019 - RISK: Maximum amount per transaction
    5001 - RISK: Number of repeats per PAN
    5020 - RISK: Number of approved transactions per PAN
    5003 - RISK: Number of repeats per BIN
    5016 - RISK: Total sum on amount
    5021 - RISK: Sum on amount of approved transactions per PAN
    5022 - RISK: Sum on amount of approved transactions per BIN
    5005 - RISK: Percentage of declined transactions
    5009 - RISK: Number of chargebacks
    5010 - RISK: Sum on amount of chargebacks
    5006 - RISK: Number of refunded transactions
    5007 - RISK: Percentage increment of sum on amount of refunded transactions
    5023 - RISK: Number of approved transactions per PAN and MCC on amount
    5011 - RISK: Number of retrieval requests
    5012 - RISK: Sum on amount of retrieval requests
    5013 - RISK: Average amount per transaction
    5014 - RISK: Percentage increment of average amount per transaction
    5015 - RISK: Percentage increment of number of transactions
    5017 - RISK: Percentage increment of total sum on amount
    5050 - RISK: Number of repeats per IP
    5051 - RISK: Number of repeats per cardholder name
    5052 - RISK: Number of repeats per cardholder e-mail
    6000 - Systan mismatch
  */

  module.exports = {
    "0000" : {
      "msg" : "Approved"
    },
    "1001" : {
      "msg" : "Card expired"
    },
    "1002" : {
      "msg" : "Card suspicious"
    },
    "1003" : {
      "msg" : "Card suspended"
    },
    "1004" : {
      "msg" : "Card stolen"
    },
    "1005" : {
      "msg" : "Card lost"
    },
    "1011" : {
      "msg" : "Card not found"
    },
    "1012" : {
      "msg" : "Cardholder not found"
    },
    "1014" : {
      "msg" : "Account not found"
    },
    "1015" : {
      "msg" : "Invalid request"
    },
    "1016" : {
      "msg" : "Not sufficient funds"
    },
    "1017" : {
      "msg" : "Previously reversed"
    },
    "1018" : {
      "msg" : "Previously reversed"
    },
    "1019" : {
      "msg" : "Further activity prevents reversal"
    },
    "1020" : {
      "msg" : "Further activity prevents void"
    },
    "1021" : {
      "msg" : "Original transaction has been voided"
    },
    "1022" : {
      "msg" : "Preauthorization is not allowed for this card"
    },
    "1023" : {
      "msg" : "Only full 3D authentication is allowed for this card"
    },
    "1024" : {
      "msg" : "Installments are not allowed for this card"
    },
    "1025" : {
      "msg" : "Transaction with installments can not be send as preauthorization"
    },
    "1026" : {
      "msg" : "Installments are not allowed for non ZABA cards"
    },
    "1050" : {
      "msg" : "Transaction declined"
    },
    "1802" : {
      "msg" : "Missing fields"
    },
    "1803" : {
      "msg" : "Extra fields exist"
    },
    "1806" : {
      "msg" : "Card not active"
    },
    "1808" : {
      "msg" : "Card not configured"
    },
    "1810" : {
      "msg" : "Invalid amount"
    },
    "1811" : {
      "msg" : "System error - database"
    },
    "1812" : {
      "msg" : "System error - transaction"
    },
    "1813" : {
      "msg" : "Cardholder not active"
    },
    "1814" : {
      "msg" : "Cardholder not configured"
    },
    "1815" : {
      "msg" : "Cardholder expired"
    },
    "1816" : {
      "msg" : "Original not found"
    },
    "1817" : {
      "msg" : "Usage limit reached"
    },
    "1818" : {
      "msg" : "Configuration error"
    },
    "1819" : {
      "msg" : "Invalid terminal"
    },
    "1820" : {
      "msg" : "Inactive terminal"
    },
    "1821" : {
      "msg" : "Invalid merchant"
    },
    "1822" : {
      "msg" : "Duplicate entity"
    },
    "1823" : {
      "msg" : "Invalid acquirer"
    },
    "2000" : {
      "msg" : "Internal error - host down"
    },
    "2001" : {
      "msg" : "Internal error - host timeout"
    },
    "2002" : {
      "msg" : "Internal error - invalid message"
    },
    "2003" : {
      "msg" : "Internal error - message format error"
    },
    "2013" : {
      "msg" : "3D Secure error - invalid request"
    },
    "3000" : {
      "msg" : "Time expired"
    },
    "3100" : {
      "msg" : "Function not supported"
    },
    "3200" : {
      "msg" : "Timeout"
    },
    "3201" : {
      "msg" : "Authorization host not active"
    },
    "3202" : {
      "msg" : "System not ready"
    },
    "4001" : {
      "msg" : "3D Secure error - ECI 7"
    },
    "4002" : {
      "msg" : "3D Secure error - not 3D Secure, store policy"
    },
    "4003" : {
      "msg" : "3D secure error - not authenticated"
    },
    "5000" : {
      "msg" : "Request in progress"
    },
    "5018" : {
      "msg" : "RISK: Minimum amount per transaction"
    },
    "5019" : {
      "msg" : "RISK: Maximum amount per transaction"
    },
    "5001" : {
      "msg" : "RISK: Number of repeats per PAN"
    },
    "5020" : {
      "msg" : "RISK: Number of approved transactions per PAN"
    },
    "5003" : {
      "msg" : "RISK: Number of repeats per BIN"
    },
    "5016" : {
      "msg" : "RISK: Total sum on amount"
    },
    "5021" : {
      "msg" : "RISK: Sum on amount of approved transactions per PAN"
    },
    "5022" : {
      "msg" : "RISK: Sum on amount of approved transactions per BIN"
    },
    "5005" : {
      "msg" : "RISK: Percentage of declined transactions"
    },
    "5009" : {
      "msg" : "RISK: Number of chargebacks"
    },
    "5010" : {
      "msg" : "RISK: Sum on amount of chargebacks"
    },
    "5006" : {
      "msg" : "RISK: Number of refunded transactions"
    },
    "5007" : {
      "msg" : "RISK: Percentage increment of sum on amount of refunded transactions"
    },
    "5023" : {
      "msg" : "RISK: Number of approved transactions per PAN and MCC on amount"
    },
    "5011" : {
      "msg" : "RISK: Number of retrieval requests"
    },
    "5012" : {
      "msg" : "RISK: Sum on amount of retrieval requests"
    },
    "5013" : {
      "msg" : "RISK: Average amount per transaction"
    },
    "5014" : {
      "msg" : "RISK: Percentage increment of average amount per transaction"
    },
    "5015" : {
      "msg" : "RISK: Percentage increment of number of transactions"
    },
    "5017" : {
      "msg" : "RISK: Percentage increment of total sum on amount"
    },
    "5050" : {
      "msg" : "RISK: Number of repeats per IP"
    },
    "5051" : {
      "msg" : "RISK: Number of repeats per cardholder name"
    },
    "5052" : {
      "msg" : "RISK: Number of repeats per cardholder e-mail"
    },
    "6000" : {
      "msg" : "Systan mismatch"
    }
  }