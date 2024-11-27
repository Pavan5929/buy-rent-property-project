import React from 'react';
import "../assets/styles/PricingDetails.css"
function PricingDetails() {
  return (
    <div className="pricing-details">
      {/* Header */}
      <div className="header">
        <h1>Comprehensive Pricing Details</h1>
        <p>
          At Estateinn, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, <br/> we break down the pricing for Seaside Serenity Villa to help you make an informed decision.
        </p>
      </div>

      {/* Note */}
      <div className="note">
        <p>
          <strong>Note</strong> The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
        </p>
      </div>

      {/* Listing Price */}
      <div className='pricesdetails'>
      <div className="listing-price">
        <h2>Listing Price</h2>
        <p>$1,250,000</p>
      </div>

      {/* Additional Fees */}
      <div className='sections'>
      <div className="section">
        <div className='additional'>
        <h3>Additional Fees</h3>
        <button>learn more</button>
        </div>
        <div className="fees">
          <div className="fee-item right">
            <span>Property Transfer Tax</span>
            <div className='costs'>
            <span>$25,000</span>
            <p>Based on the sale price and local regulations</p>
            </div>
          </div>
          <div className="fee-item">
            <span>Legal Fees</span>
             <div className='costs'>
            <span>$3,000</span>
            <p>Approximate cost for legal services, including title transfer</p>
            </div>
          </div>
          <div className="fee-item right">
            <span>Home Inspection</span>
              <div className='costs'>
            <span>$500</span>
            <p>Recommended for due diligence</p>
            </div>
          </div>
          <div className="fee-item">
            <span>Property Insurance</span>
              <div className='costs'>
            <span>$1,200</span>
            <p>Annual cost for comprehensive property insurance</p>
            </div>
          </div>
          <div className="fee-item">
            <span>Mortgage Fees</span>
              <div className='costs'>
            <span>Varies</span>
            <p>If applicable, consult with your lender for specific details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Costs */}
      <div className="section">
        <div className='additional'>
        <h3>Monthly Costs</h3>
        <button>learn more</button>
        </div>
        <div className="fees">
          <div className="fee-item right">
            <span>Property Taxes</span>
              <div className='costs'>
            <span>$1,250</span>
            <p>Approximate monthly property tax based on the sale price and local rates</p>
            </div>
          </div>
          <div className="fee-item">
            <span>Homeowners' Association Fee</span>
              <div className='costs'>
            <span>$300</span>
            <p>Monthly fee for common area maintenance and security</p>
            </div>
          </div>
        </div>
      </div>

      {/* Total Initial Costs */}
      <div className="section">
        <div className='additional'>
        <h3>Total Initial Costs</h3>
        <button>learn more</button>
        </div>
        <div className="fees">
          <div className="fee-item right">
            <span>Listing Price</span>
              <div className='costs'>
            <span>$1,250,000</span>
            </div>
          </div>
          <div className="fee-item">
            <span>Additional Fees</span>
              <div className='costs'>
            <span>$29,700</span>
             <p>Property transfer tax, legal fees, inspection, insurance</p>
            </div>
          </div>
          <div className="fee-item right">
            <span>Down Payment</span>
            <div className='costs'>
            <span>$250,000</span>
            <p>20%</p>
            </div>
          </div>
          <div className="fee-item">
            <span>Mortgage Amount</span>
              <div className='costs'>
            <span>$1,000,000</span>
            <p>If applicable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Expenses */}
      <div className="section">
        <div className='additional'>
        <h3>Monthly Expenses</h3>
        <button>learn more</button>
        </div>
        <div className="fees">
          <div className="fee-item right">
            
            <span>Property Taxes</span>
            <div className='costs'>
            <span>$1,250</span>
            </div>
          </div>
          <div className="fee-item">
            <span>Homeowners' Association Fee</span>
            <div className='costs'>
            <span>$300</span>
            </div>
          </div>
          <div className="fee-item right ">
            <span>Mortgage Payment</span>
            <div className='costs'>
            <span className='varies'>Varies Based on terms and interest rate</span>
            </div>
            </div>

            <div className="fee-item">
            <span>Property Insurance</span>
              <div className='costs'>
            <span>$100</span>
            <p>Approximate monthly cost</p>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      </div>
      </div>
  
  );
}

export default PricingDetails;
