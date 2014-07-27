//Needed By Date Validation
var today = new Date();
today.setHours(0, 0, 0, 0);
var fourDaysFromNow = new Date();
fourDaysFromNow = calcBusinessDays(new Date(), 4);

if (screen.PurchaseRequisition.NeedByDate.toString() == today.toString()) {
    alert("You’ve selected today as the delivery date. That may not be a realistic delivery date. Do you want to change the delivery date?\n\nThis delivery date may not be possible. Expediting charges will be applied to the order and billed to your department.");
}
else if (screen.PurchaseRequisition.NeedByDate < fourDaysFromNow) {
    alert("Due to processing and shipment time, this may not be a realistic delivery date. Do you want to change the delivery date?\n\nThis delivery date may not be possible. Expediting charges will be applied to the order and billed to your department.");
}

function calcBusinessDays(fromDate, days) {
    var count = 0;
    while (count < days) {
        fromDate.setDate(fromDate.getDate() + 1);
        if (fromDate.getDay() != 0 && fromDate.getDay() != 6) // Skip weekends
            count++;
    }
    return fromDate;
}